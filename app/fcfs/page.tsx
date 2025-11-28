"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Play, RotateCcw } from "lucide-react";

interface Process {
  id: number;
  at: number;
  bt: number;
}

interface Result {
  ct: number[];
  tat: number[];
  wt: number[];
  gantt: { start: number; end: number; pid: number }[];
  totalWt: number;
  totalTat: number;
}

export default function FCFS() {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [nextId, setNextId] = useState(1);
  const [atInput, setAtInput] = useState("");
  const [btInput, setBtInput] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const addProcess = () => {
    if (!atInput || !btInput) return;
    const at = Number(atInput);
    const bt = Number(btInput);
    if (bt <= 0) return;

    setProcesses([...processes, { id: nextId, at, bt }]);
    setNextId(nextId + 1);
    setAtInput("");
    setBtInput("");
  };

  const deleteProcess = (id: number) => {
    setProcesses(processes.filter(p => p.id !== id));
  };

  const resetAll = () => {
    setProcesses([]);
    setNextId(1);
    setResult(null);
    setAtInput("");
    setBtInput("");
  };

  const calculateFCFS = () => {
    if (processes.length === 0) return;

    const sorted = [...processes].sort((a, b) => a.at - b.at || a.id - b.id);
    const n = sorted.length;
    const ct = new Array(n).fill(0);
    const gantt: { start: number; end: number; pid: number }[] = [];
    let currentTime = 0;

    for (let i = 0; i < n; i++) {
      if (currentTime < sorted[i].at) {
        currentTime = sorted[i].at;
      }

      const start = currentTime;
      const end = currentTime + sorted[i].bt;
      gantt.push({ start, end, pid: i });
      currentTime = end;
      ct[i] = end;
    }

    const tat = new Array(n);
    const wt = new Array(n);

    sorted.forEach((proc, i) => {
      tat[i] = ct[i] - proc.at;
      wt[i] = tat[i] - proc.bt;
    });

    const origCT = new Array(processes.length).fill(0);
    const origTAT = new Array(processes.length).fill(0);
    const origWT = new Array(processes.length).fill(0);

    sorted.forEach((proc, sortedIdx) => {
      const origIdx = processes.findIndex(p => p.id === proc.id);
      origCT[origIdx] = ct[sortedIdx];
      origTAT[origIdx] = tat[sortedIdx];
      origWT[origIdx] = wt[sortedIdx];
    });

    setResult({
      ct: origCT,
      tat: origTAT,
      wt: origWT,
      gantt,
      totalWt: origWT.reduce((a, b) => a + b, 0),
      totalTat: origTAT.reduce((a, b) => a + b, 0),
    });
  };

  const getProcessId = (sortedIndex: number) => {
    const sorted = [...processes].sort((a, b) => a.at - b.at || a.id - b.id);
    return sorted[sortedIndex]?.id || 1;
  };

  return (
    <section className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent px-4"
        >
          First Come First Served (FCFS)
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-5 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Add Processes</h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <input
              type="number"
              placeholder="Arrival Time (AT)"
              value={atInput}
              onChange={(e) => setAtInput(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-base sm:text-lg"
              min="0"
            />
            <input
              type="number"
              placeholder="Burst Time (BT)"
              value={btInput}
              onChange={(e) => setBtInput(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-base sm:text-lg"
              min="1"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addProcess}
              className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:bg-green-700"
            >
              <Plus size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Add Task</span>
            </motion.button>
          </div>

          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {processes.length === 0 ? (
              <p className="text-center text-gray-500 py-6 sm:py-8 text-sm sm:text-base">No processes added yet. Add one above!</p>
            ) : (
              processes.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 sm:gap-8 font-semibold text-sm sm:text-base">
                    <span className="text-lg sm:text-xl text-green-700">P{p.id}</span>
                    <span>AT: <strong className="text-blue-700">{p.at}</strong></span>
                    <span>BT: <strong className="text-purple-700">{p.bt}</strong></span>
                  </div>
                  <button
                    onClick={() => deleteProcess(p.id)}
                    className="text-red-600 hover:bg-red-100 p-2 sm:p-3 rounded-lg transition"
                  >
                    <Trash2 size={18} className="sm:w-[22px] sm:h-[22px]" />
                  </button>
                </motion.div>
              ))
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calculateFCFS}
              disabled={processes.length === 0}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-xl sm:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
            >
              <Play size={22} className="sm:w-7 sm:h-7" />
              Visualize FCFS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetAll}
              className="flex-1 bg-gray-700 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-lg sm:shadow-xl hover:bg-gray-800 flex items-center justify-center gap-2 sm:gap-3"
            >
              <RotateCcw size={22} className="sm:w-7 sm:h-7" />
              Reset All
            </motion.button>
          </div>
        </motion.div>

        {result && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Gantt Chart */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-5 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 text-gray-800">Gantt Chart</h3>
              <div className="flex items-end gap-2 sm:gap-3 overflow-x-auto pb-6 sm:pb-8">
                {result.gantt.map((block, i) => (
                  <div key={i} className="flex flex-col items-center min-w-20 sm:min-w-28 lg:min-w-32">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-white font-bold text-base sm:text-lg lg:text-xl px-3 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl shadow-lg sm:shadow-2xl w-full text-center"
                      style={{
                        backgroundColor: `hsl(${i * 60}, 70%, 50%)`,
                        height: `${block.end - block.start * 35}px`,
                      }}
                    >
                      P{getProcessId(block.pid)}
                    </motion.div>
                    <div className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-b-xl sm:rounded-b-2xl w-full text-center font-mono">
                      {block.start} → {block.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Process Table */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-5 sm:p-6 lg:p-8 overflow-x-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Process Details</h3>
                <table className="w-full border-collapse text-sm sm:text-base lg:text-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">P</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">AT</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">BT</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">CT</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">TAT</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">WT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processes.map((p, i) => (
                      <tr key={i} className="text-center hover:bg-gray-50 transition">
                        <td className="border py-3 sm:py-4 font-bold text-green-700">P{p.id}</td>
                        <td className="border py-3 sm:py-4">{p.at}</td>
                        <td className="border py-3 sm:py-4">{p.bt}</td>
                        <td className="border py-3 sm:py-4 font-semibold">{result.ct[i]}</td>
                        <td className="border py-3 sm:py-4">{result.tat[i]}</td>
                        <td className="border py-3 sm:py-4 bg-yellow-100 text-red-600 font-bold">{result.wt[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl sm:shadow-2xl flex flex-col justify-center items-center"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10">Average Values</h3>
                <div className="space-y-6 sm:space-y-8 text-center">
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl opacity-90">Average Turnaround Time</p>
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-black">{(result.totalTat / processes.length).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl opacity-90">Average Waiting Time</p>
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-300">{(result.totalWt / processes.length).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
