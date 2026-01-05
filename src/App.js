import React, { useState, useEffect } from "react";
import {
	Github,
	Linkedin,
	Mail,
	Download,
	Menu,
	X,
	MapPin,
	Phone,
	Award,
	Sun,
	Moon,
	TrendingUp,
	Code2,
	Braces,
	Layers,
	Cpu,
	Paintbrush,
	LayoutGrid,
	Database,
	ShieldCheck,
	Server,
	GitBranch,
	Send,
	Terminal,
} from "lucide-react";

const skillIcons = {
	React: Code2,
	"Next.js": Layers,
	Redux: Layers,
	"JavaScript (ES6+)": Braces,
	"Tailwind CSS": Paintbrush,
	Bootstrap: LayoutGrid,
	Java: Cpu,
	"REST APIs": Send,
	Postman: Terminal,
	"Spring Boot": Server,
	"RESTful APIs": Send,
	"Database Integration": Database,
	"Authentication & Authorization": ShieldCheck,
	"Backend Business Logic": Server,
	Git: GitBranch,
};

const skills = [
	{
		name: "React",
		desc: "A powerful JavaScript library for building fast, scalable, and interactive user interfaces using reusable components, hooks, and a virtual DOM for efficient rendering.",
	},
	{
		name: "Next.js",
		desc: "A React framework that enables server-side rendering, static site generation, and optimized routing to build high-performance, SEO-friendly web applications.",
	},
	{
		name: "Redux",
		desc: "A predictable state management library used to manage and centralize application state, making complex data flows easier to debug and maintain.",
	},
	{
		name: "JavaScript (ES6+)",
		desc: "Modern JavaScript with ES6+ features such as arrow functions, async/await, destructuring, modules, and promises to write clean, efficient, and maintainable code.",
	},
	{
		name: "Tailwind CSS",
		desc: "A utility-first CSS framework that allows rapid UI development by composing styles directly in markup, enabling responsive, consistent, and modern designs.",
	},
	{
		name: "Bootstrap",
		desc: "A popular CSS framework that provides responsive grid systems and prebuilt UI components for quickly building consistent and mobile-friendly layouts.",
	},
	{
		name: "Java",
		desc: "A robust, object-oriented programming language used to build secure, scalable, and high-performance applications with strong support for backend development.",
	},
	{
		name: "REST APIs",
		desc: "An architectural style for designing networked applications that enables structured communication between frontend and backend using HTTP methods and JSON data.",
	},
	{
		name: "Postman",
		desc: "An API development and testing tool used to create, test, debug, and document REST APIs efficiently during development and integration.",
	},
	{
		name: "Spring Boot",
		desc: "A Java-based framework used to build backend applications with simplified configuration and rapid development support.",
	},
	{
		name: "RESTful APIs",
		desc: "Designing and implementing REST APIs to enable structured and secure communication between frontend and backend services.",
	},
	{
		name: "Database Integration",
		desc: "Integrating databases into backend applications to store, retrieve, and manage application data efficiently.",
	},
	{
		name: "Authentication & Authorization",
		desc: "Implementing secure authentication and role-based authorization to protect backend resources and APIs.",
	},
	{
		name: "Backend Business Logic",
		desc: "Developing server-side business logic to handle application workflows, validations, and core processing.",
	},
	{
		name: "Git",
		desc: "A distributed version control system used to track code changes, manage branches, collaborate with teams, and maintain project history efficiently.",
	},
];

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("skills");
	const [darkMode, setDarkMode] = useState(true);

	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(150);

	const titles = [
		"Frontend Developer",
		"Backend Developer",
		"Full Stack Developer",
		"Java Developer",
		"React Developer",
	];

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1500);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const handleType = () => {
			const i = loopNum % titles.length;
			const fullText = titles[i];
			setDisplayText(
				isDeleting
					? fullText.substring(0, displayText.length - 1)
					: fullText.substring(0, displayText.length + 1)
			);
			setTypingSpeed(isDeleting ? 70 : 150);
			if (!isDeleting && displayText === fullText) {
				setTimeout(() => setIsDeleting(true), 2000);
			} else if (isDeleting && displayText === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				setTypingSpeed(500);
			}
		};
		const timer = setTimeout(handleType, typingSpeed);
		return () => clearTimeout(timer);
	}, [displayText, isDeleting, loopNum, typingSpeed]);

	const personalInfo = {
		name: "RAFIVALI SHAIK",
		email: "rafivalihshaik@gmail.com",
		phone: "+91 9392473521",
		location: "Tadipatri, Andhra Pradesh, 515411",
		github: "https://github.com/rafivalih",
		linkedin: "https://www.linkedin.com/in/rafivalih-shaik",
		summary:
			"Front-End Developer with hands-on experience building 5+ responsive web projects. Skilled in creating cross-device, high-performance interfaces with a focus on accessibility and clean code practices.",
	};

	const projects = [
		{
			title: "Notes App",
			tech: "React, Tailwind",
			desc: "Created a Notes Application using React to add, archive, and pin notes with localStorage support.",
			image: "NotesApp.png",
			link: "https://notesapp-r.netlify.app/",
		},
		{
			title: "Quiz App",
			tech: "React, JSON API, Tailwind",
			desc: "Crafted a Quiz App with category-based questions and a 10-second timer.",
			image: "QuizApp.png",
			link: "https://rafivalih.github.io/Quiz-App/",
		},
		{
			title: "Tic Tac Toe",
			tech: "JavaScript, HTML5, CSS",
			desc: "Built a browser-based 2-player game with consistent turn-based logic.",
			image: "Tic-tac-toe.png",
			link: "https://tic-tac-toe-alpha-ten-84.vercel.app/",
		},
		{
			title: "Responsive Design",
			tech: "HTML5, CSS",
			desc: "The site layout adjusts smoothly for mobile, tablet, laptop, and desktop screens.",
			image: "responsivedesign.png",
			link: "https://rafivalih.github.io/responsive-web-design/",
		},
		{
			title: "Puzzle Game - Jigsaw",
			tech: "HTML5, CSS, JavaScript",
			desc: "Developing an advanced puzzle game with authentication, categories, and 3×3, 4×4, and 5×5 modes. 50% complete.",
			image: "puzzlegame.png",
		},
	];

	if (isLoading)
		return (
			<div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-50 text-white font-bold tracking-widest uppercase">
				Please Wait Portfolio is Loading...
			</div>
		);

	return (
		<div
			className={`${
				darkMode ? "bg-[#0f172a] text-slate-200" : "bg-slate-50 text-slate-800"
			} transition-colors duration-500 font-sans`}
		>
			<nav
				className={`fixed w-full z-40 backdrop-blur-md shadow-lg ${
					darkMode
						? "bg-[#0f172a]/80 border-b border-slate-800"
						: "bg-white/80 border-b border-slate-200"
				}`}
			>
				<div className="max-w-[95%] mx-auto px-4 h-16 flex justify-between items-center">
					<span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
						<a href="/">SRV</a>
					</span>
					<div className="hidden md:flex items-center space-x-10 text-sm lg:text-base">
						{["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="hover:text-blue-400 font-semibold transition-all"
							>
								{item}
							</a>
						))}
						<button
							onClick={() => setDarkMode(!darkMode)}
							className="p-2 rounded-full bg-slate-800/20"
						>
							{darkMode ? (
								<Sun size={20} className="text-yellow-400" />
							) : (
								<Moon size={20} className="text-slate-600" />
							)}
						</button>
					</div>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2"
					>
						{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
				{/* Mobile Navigation Menu */}
				<div
					className={`${
						isMenuOpen ? "block" : "hidden"
					} md:hidden bg-[#0f172a] border-b border-slate-800 w-full px-6 py-8 space-y-4`}
				>
					{["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							onClick={() => setIsMenuOpen(false)}
							className="block text-lg font-semibold text-white hover:text-blue-400"
						>
							{item}
						</a>
					))}
				</div>
			</nav>

			{/* HERO SECTION */}
			<section
				id="home"
				className="min-h-screen flex items-center px-4 sm:px-6 pt-24 md:pt-20"
			>
				<div className="max-w-[95%] mx-auto flex flex-col-reverse md:flex-row items-center w-full gap-8 md:gap-16">
					<div className="w-full md:w-3/5 space-y-6 md:space-y-8 text-center md:text-left">
						<h3 className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
							Welcome to my world
						</h3>
						<h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">
              <h4 className="text-[30px]">Hello, It's Me</h4>
							{personalInfo.name}
						</h1>
						<div className="text-xl sm:text-2xl md:text-4xl font-bold h-10">
							And I'm a{" "}
							<span className="text-emerald-400 border-r-4 border-emerald-400 pr-2 text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
								{displayText}
							</span>
						</div>
						<p className="max-w-2xl text-base sm:text-lg text-slate-500 leading-relaxed mx-auto md:mx-0">
							{personalInfo.summary}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center md:justify-start">
							<a
								href="Rafivali_Shaik Frontend Resume.pdf"
								download
								className="w-full sm:w-auto"
							>
								<button className="w-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
									Download CV <Download size={20} />
								</button>
							</a>
							<div className="flex gap-4 items-center justify-center">
								<a
									href={personalInfo.github}
									target="_blank"
									rel="noreferrer"
									className="p-3 bg-slate-800/30 rounded-xl hover:bg-blue-600 transition-all"
								>
									<Github />
								</a>
								<a
									href={personalInfo.linkedin}
									target="_blank"
									rel="noreferrer"
									className="p-3 bg-slate-800/30 rounded-xl hover:bg-blue-600 transition-all"
								>
									<Linkedin />
								</a>
							</div>
						</div>
						<p className="animate-float p-1 text-blue-400 text-sm sm:text-base">
							Know more about me 👇
						</p>
					</div>
					<div className="w-full md:w-2/5 flex justify-center">
  <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 p-[3px] rounded-full
                  bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#3b82f6)]">
    
    {/* THIS div is the BORDER — rotate ONLY this */}
    <div
      className="absolute inset-0 rounded-full
                 bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#3b82f6)]
                 blur-xl opacity-60 animate-spin-slow"
    ></div>

    {/* IMAGE — stays still */}
    <img
      src="linkedin profile pic.jpg"
      alt="Profile"
      className="relative w-full h-full rounded-full object-cover bg-black"
    />
  </div>
</div>

				</div>
			</section>

			{/* ABOUT SECTION */}
			<section
				id="about"
				className={`py-20 md:py-32 px-4 sm:px-6 ${
					darkMode ? "bg-[#0a101f]" : "bg-slate-100"
				}`}
			>
				<div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
					<div className="w-full md:w-1/3 flex justify-center">
						<img
							src="aboutphoto.jpeg"
							alt="About"
							  className="w-[500px] h-[500px] border-4 border-yellow-800 rounded-full object-cover"

						/>
					</div>
					<div className="w-full md:w-2/3">
						<h2 className="text-3xl md:text-4xl font-black mb-6 text-center md:text-left uppercase tracking-widest">
							About Me
						</h2>
						<p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-400 text-justify md:text-left">
							I am a passionate Front-End Developer with a strong focus on
							building responsive, scalable, and user-friendly web applications
							using React, JavaScript, and Tailwind CSS. I enjoy transforming
							ideas and designs into clean, functional interfaces while
							maintaining high standards of performance, accessibility, and code
							quality. I have built multiple interactive projects that emphasize
							clean UI design, efficient state management, and real-world
							usability. Along with front-end development, I have a solid
							understanding of Core Java, including object-oriented programming
							principles and foundational programming concepts. Currently, I am
							in the process of expanding my skill set into backend development,
							where I am learning to build RESTful APIs, manage server-side
							logic, and work with databases. I am highly motivated, quick to
							learn, and eager to contribute to collaborative development
							environments while growing into a well-rounded full-stack
							developer.
						</p>
					</div>
				</div>
			</section>

			{/* SKILLS SECTION */}
			<section id="skills" className="py-20 md:py-32 px-4 sm:px-6">
				<div className="max-w-[95%] mx-auto">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-12 md:mb-16 underline decoration-blue-500 decoration-4 underline-offset-8 uppercase tracking-widest text-center">
						My Skills & Expertise
					</h2>
					<div className="flex space-x-6 md:space-x-10 border-b border-slate-700 mb-10 overflow-x-auto justify-start sm:justify-center md:justify-start scrollbar-hide">
						{["skills", "education", "certifications"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`pb-4 text-sm sm:text-base md:text-lg font-bold capitalize transition-all whitespace-nowrap ${
									activeTab === tab
										? "text-blue-500 border-b-2 border-blue-500"
										: "text-slate-500"
								}`}
							>
								{tab}
							</button>
						))}
					</div>

					<div className="min-h-[300px]">
						{activeTab === "skills" && (
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
								{skills.map((skill) => (
									<div
										key={skill.name}
										className="relative group p-4 bg-slate-800/20 border border-slate-700/50 rounded-xl flex items-center gap-3 cursor-pointer hover:border-blue-500 transition"
									>
										{/* <Code2 className="text-emerald-500 shrink-0" size={18} /> */}
										{(() => {
											const Icon = skillIcons[skill.name] || Code2;
											return (
												<Icon className="text-emerald-500 shrink-0" size={18} />
											);
										})()}

										<span className="text-white text-sm sm:text-base">
											{skill.name}
										</span>
										<div className="hidden lg:block absolute z-50 left-1/2 top-full mt-3 w-56 -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
											<div className="rounded-xl bg-slate-900 border border-slate-700 p-4 shadow-xl">
												<h4 className="text-sm font-semibold text-white mb-1">
													{skill.name}
												</h4>
												<p className="text-xs text-slate-400 leading-relaxed">
													{skill.desc}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
						{activeTab === "education" && (
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
								<div className="relative pl-6 border-l-2 border-blue-500">
									<h4 className="text-lg md:text-xl font-bold">
										Parul University (Pursuing)
									</h4>
									<p className="text-blue-500 font-medium italic text-sm">
										Bachelor of Technology in CSE
									</p>
									<p className="text-slate-500 text-xs sm:text-sm">
										Vadodara, Gujarat | 2022 – Present
									</p>
								</div>
								<div className="relative pl-6 border-l-2 border-slate-700">
									<h4 className="text-lg md:text-xl font-bold">
										C.V. Raman Junior College
									</h4>
									<p className="text-blue-500 font-medium italic text-sm">
										Intermediate (MPC)
									</p>
									<p className="text-slate-500 text-xs sm:text-sm">
										Andhra Pradesh | 2020 – 2022
									</p>
								</div>
								<div className="relative pl-6 border-l-2 border-blue-500">
									<h4 className="text-lg md:text-xl font-bold">
										Mourya High School
									</h4>
									<p className="text-blue-500 font-medium italic text-sm">
										10th Class (S.S.C)
									</p>
									<p className="text-slate-500 text-xs sm:text-sm">
										Tadipatri, Andhra Pradesh | 2019 – 2020
									</p>
								</div>
							</div>
						)}
						{activeTab === "certifications" && (
							<div className="grid grid-cols-1 gap-3">
								{[
                  {
									"Name":"React JS Development",
                  "URL" :"https://media.geeksforgeeks.org/courses/certificates/590ad26ea24688433338286457b7bb0c.pdf"
                },
                  {
									"Name":"Next.js Development",
                  "URL" :"https://media.geeksforgeeks.org/courses/certificates/4ed205ca0b4f70295dfe7b4bee7b838e.pdf"
                },
                  {
									"Name":"Front-End Interview Prep",
                  "URL" :"https://media.geeksforgeeks.org/courses/certificates/511157cbd55c161fa1b83b2203cea5a6.pdf"
                },
									
								].map((cert, i) => (
									<div className="p-4 sm:p-5 bg-slate-800/20 rounded-xl border border-slate-700 ">
                  <div
										key={i}
										className="flex items-center gap-4 mb-2"
									>
										<Award className="text-yellow-500 shrink-0" />{" "}
										<span className="font-bold text-sm sm:text-base">
											{cert.Name} – GeeksforGeeks
										</span>
									</div>
                  <a className="flex gap-2" href={cert.URL} target="_blank">Link <TrendingUp/> </a>
                  </div>
								))}
							</div>
						)}
					</div>
				</div>
			</section>

			{/* PROJECTS SECTION */}
			<section
				id="projects"
				className={`py-20 md:py-32 px-4 sm:px-6 ${
					darkMode ? "bg-[#0a101f]" : "bg-slate-100"
				}`}
			>
				<div className="max-w-[95%] mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 underline decoration-blue-500 decoration-4 underline-offset-8 uppercase tracking-widest">
						My Works
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
						{projects.map((p, i) => (
							<div
								key={i}
								className={`group ${
									darkMode ? "bg-[#0f172a]" : "bg-white"
								} rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col h-full`}
							>
								<div className="h-48 sm:h-60 overflow-hidden relative shrink-0">
									<img
										src={p.image}
										alt={p.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									/>
								</div>
								<div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
									<div className="space-y-2">
										<h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
										<p className="text-blue-500 text-xs md:text-sm font-bold tracking-widest uppercase">
											{p.tech}
										</p>
										<p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
											{p.desc}
										</p>
									</div>
									{i !== 4 && (
										<div className="flex justify-center items-center gap-2">
											<a
												className="text-blue-600 text-[18px]"
												href={p.link}
												target="_blank"
												rel="noreferrer"
											>
												View
											</a>
											<TrendingUp size={20} />
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CONTACT SECTION */}
			<section id="contact" className="py-20 md:py-24 px-4 sm:px-6 text-center">
				<div className="max-w-[95%] mx-auto">
					<h2
						className={`text-3xl sm:text-5xl font-black mb-6 ${
							darkMode ? "text-white" : "text-slate-900"
						}`}
					>
						Get in <span className="text-blue-500">touch</span>
					</h2>
					<p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-500 mb-8 md:mb-12">
						Currently open for opportunities. Feel free to connect!
					</p>
					<div className="flex justify-center items-center gap-6 sm:gap-10">
						{[
							{
								icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
								link: `mailto:${personalInfo.email}`,
							},
							{
								icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
								link: personalInfo.linkedin,
							},
							{
								icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" />,
								link: personalInfo.github,
							},
						].map((social, idx) => (
							<a
								key={idx}
								href={social.link}
								target="_blank"
								rel="noreferrer"
								className={`p-4 sm:p-5 rounded-full border-2 border-blue-500/30 text-blue-500 transition-all duration-300 hover:scale-110`}
							>
								{social.icon}
							</a>
						))}
					</div>
					<div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 text-slate-500 font-semibold text-sm sm:text-base">
						<div className="flex items-center gap-2">
							<Phone size={18} className="text-blue-500" />
							<span>{personalInfo.phone}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin size={18} className="text-blue-500" />
							<span>{personalInfo.location}</span>
						</div>
					</div>
				</div>
			</section>

			<footer className="py-8 md:py-12 text-center text-slate-500 text-xs sm:text-sm border-t border-slate-800/30">
				© {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
			</footer>
		</div>
	);
};

export default App;
