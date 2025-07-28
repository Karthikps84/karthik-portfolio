import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`${
        darkMode ? "bg-[#0F172A] text-white" : "bg-[#F8FAFC] text-gray-900"
      } min-h-screen transition-all duration-300`}
    >
      <header className="relative px-8 py-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Karthik Palyakere Suresh</h1>
          <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
            Computer Vision & AI Engineer · MSc CS @ TU Kaiserslautern
          </p>
        </div>
        <button
          className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12 grid gap-10">
        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">🧠 About Me</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I specialize in building intelligent perception systems using deep learning and multi-sensor fusion. With a background in both industry and academia, my focus lies in designing robust, scalable solutions for real-world computer vision problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
            <h2 className="text-2xl font-bold mb-2">🛠️ Core Skills</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Python, SQL, Bash, R</li>
              <li>PyTorch, TensorFlow, ROS2, OpenCV</li>
              <li>AWS EC2/S3/SageMaker, Docker, Git</li>
              <li>Data visualization: Tableau, Power BI, Seaborn</li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
            <h2 className="text-2xl font-bold mb-2">🏆 Achievements</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>ICCV 2025 paper on lighting-robust perception</li>
              <li>40% improvement in detection reliability at DFKI</li>
              <li>Built end-to-end AWS-based segmentation systems</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-4">💼 Experience Timeline</h2>
          <ol className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
            <li className="mb-10 ml-6">
              <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
              <h3 className="text-lg font-semibold">Merck Group – Data Scientist Intern / Master Thesis</h3>
              <time className="block mb-2 text-sm font-medium text-gray-400">Mar 2025 – Present</time>
              <p className="text-gray-700 dark:text-gray-300">Automated segmentation of nanoparticles with scalable DL pipelines using AWS & PyTorch.</p>
            </li>
            <li className="ml-6">
              <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
              <h3 className="text-lg font-semibold">DFKI – Research Assistant</h3>
              <time className="block mb-2 text-sm font-medium text-gray-400">Jul 2023 – Feb 2025</time>
              <p className="text-gray-700 dark:text-gray-300">Built real-time object detection pipelines integrating camera, LiDAR and radar in ROS2.</p>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-4">🚀 Projects Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-xl shadow border dark:border-gray-800">
              <img src="/images/lowlight-enhancement.jpg" alt="Low Light Enhancement" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Low-Light Image Enhancement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enhanced mAP50 by 5% using adaptive models under night vision conditions.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow border dark:border-gray-800">
              <img src="/images/sensor-fusion.jpg" alt="Sensor Fusion" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Sensor Fusion for Object Detection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Used multi-sensor data (camera + radar) to boost real-time object detection.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">📚 Publications</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>ICCV 2025:</strong> TorchAdapt: Light-Agnostic Real-Time Perception</li>
            <li><strong>IJSRD 2022:</strong> Intellectual Interactive System — NMIT Case Study</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">🎓 Education</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>MSc in CS – TU Kaiserslautern (ML & AI), 2022–2025</li>
            <li>B.E. in Computer Science – NMIT Bengaluru, 2018–2022</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-md bg-white dark:bg-gray-900 p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">📬 Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">📧 <a href="mailto:Karthikps681@gmail.com" className="text-blue-600 dark:text-blue-400">Karthikps681@gmail.com</a></p>
          <p className="text-gray-700 dark:text-gray-300">📍 Mannheim Area, Germany</p>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600">
        © 2025 Karthik Palyakere Suresh — Built with ❤️ using React & Vite
      </footer>
    </main>
  );
}
