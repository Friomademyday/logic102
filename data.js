const COURSE_DATA = {
    "python-101": {
        title: "Python Architect Protocol",
        phases: [
            {
                name: "Phase 1: The Kernel",
                nodes: [
                    { id: "PY-1.1", title: "System Overview & Setup", duration: "10" },
                    { id: "PY-1.2", title: "Execution Flow: How it Runs", duration: "15" },
                    { id: "PY-1.3", title: "Interactive Loop & Script Files", duration: "20" }
                ]
            },
            {
                name: "Phase 2: Types & Objects",
                nodes: [
                    { id: "PY-2.1", title: "Numbers & Bitwise Logic", duration: "20" },
                    { id: "PY-2.2", title: "Strings & Slicing", duration: "25" },
                    { id: "PY-2.3", title: "Lists & Dictionaries", duration: "30" },
                    { id: "PY-2.4", title: "Tuples & Persistence", duration: "15" }
                ]
            },
            {
                name: "Phase 3: The Flow",
                nodes: [
                    { id: "PY-3.1", title: "If Tests & Syntax Rules", duration: "15" },
                    { id: "PY-3.2", title: "For/While Loops", duration: "20" },
                    { id: "PY-3.3", title: "Iterators & Comprehensions", duration: "25" }
                ]
            },
            {
                name: "Phase 4: Functional Geometry",
                nodes: [
                    { id: "PY-4.1", title: "Scope & LEGB Logic", duration: "20" },
                    { id: "PY-4.2", title: "Arguments & Passing", duration: "25" },
                    { id: "PY-4.3", title: "Recursion & Generators", duration: "30" }
                ]
            },
            {
                name: "Phase 5: Modules",
                nodes: [
                    { id: "PY-5.1", title: "Module Coding Basics", duration: "20" },
                    { id: "PY-5.2", title: "Packages & Namespace Imports", duration: "25" }
                ]
            },
            {
                name: "Phase 6: OOP & Classes",
                nodes: [
                    { id: "PY-6.1", title: "Inheritance Design", duration: "35" },
                    { id: "PY-6.2", title: "Operator Overloading", duration: "30" },
                    { id: "PY-6.3", title: "Designing with Classes", duration: "40" }
                ]
            },
            {
                name: "Phase 7: Stability",
                nodes: [
                    { id: "PY-7.1", title: "Exception Handling", duration: "20" },
                    { id: "PY-7.2", title: "Termination Actions", duration: "15" }
                ]
            },
            {
                name: "Phase 8: Advanced Logic",
                nodes: [
                    { id: "PY-8.1", title: "Unicode & Byte Strings", duration: "30" },
                    { id: "PY-8.2", title: "Managed Attributes", duration: "35" },
                    { id: "PY-8.3", title: "Decorators & Metaclasses", duration: "45" }
                ]
            }
        ]
    },
    "cpp-architect": {
        title: "C++ Architect",
        phases: [
            {
                name: "Phase 1: Foundation",
                nodes: [
                    { id: "cpp-syntax", title: "Basic Syntax", duration: "10" },
                    { id: "cpp-data", title: "Data Types & Operators", duration: "20" },
                    { id: "cpp-loops", title: "Loop Control & Decisions", duration: "20" }
                ]
            },
            {
                name: "Phase 2: Data Architecture",
                nodes: [
                    { id: "cpp-arrays", title: "Arrays & Structures", duration: "25" },
                    { id: "cpp-pointers", title: "Pointer Logic", duration: "35" },
                    { id: "cpp-functions", title: "Function Declarations", duration: "20" }
                ]
            },
            {
                name: "Phase 3: OOP Pillars",
                nodes: [
                    { id: "cpp-classes", title: "Classes & Objects", duration: "40" },
                    { id: "cpp-inheritance", title: "Inheritance & Polymorphism", duration: "35" },
                    { id: "cpp-files", title: "Files & Streams", duration: "25" }
                ]
            }
        ]
    },
    "web-architect": {
        title: "Web Architect (HTML/CSS)",
        phases: [
            {
                name: "Phase 1: Structure",
                nodes: [
                    { id: "html-elements", title: "Elements & Attributes", duration: "10" },
                    { id: "html-text", title: "Text & List Protocols", duration: "15" },
                    { id: "html-forms", title: "Input Forms", duration: "25" }
                ]
            },
            {
                name: "Phase 2: Presentation",
                nodes: [
                    { id: "css-selectors", title: "Selectors & Typography", duration: "20" },
                    { id: "css-box", title: "The Box Model", duration: "30" },
                    { id: "css-layout", title: "Layout (Flex & Grid)", duration: "40" }
                ]
            }
        ]
    },
    "js-architect": {
        title: "JavaScript Architect",
        phases: [
            {
                name: "Phase 1: Logic Core",
                nodes: [
                    { id: "js-vars", title: "Variables & Data Types", duration: "15" },
                    { id: "js-logic", title: "Flow Control & Loops", duration: "25" },
                    { id: "js-arrays", title: "Arrays & Object Logic", duration: "30" }
                ]
            },
            {
                name: "Phase 2: Dynamic Interface",
                nodes: [
                    { id: "js-dom", title: "DOM Manipulation", duration: "30" },
                    { id: "js-events", title: "Event Listener Logic", duration: "20" },
                    { id: "js-async", title: "Async/Await Protocols", duration: "35" }
                ]
            }
        ]
    },
    "swift-architect": {
        title: "Swift Architect",
        phases: [
            {
                name: "Phase 1: Core Syntax",
                nodes: [
                    { id: "sw-basics", title: "Variables & Constants", duration: "10" },
                    { id: "sw-optionals", title: "Optionals Logic", duration: "25" },
                    { id: "sw-collections", title: "Arrays & Dictionaries", duration: "20" }
                ]
            },
            {
                name: "Phase 2: Functional Design",
                nodes: [
                    { id: "sw-func", title: "Functions & Closures", duration: "30" },
                    { id: "sw-oop", title: "Classes & Structs", duration: "35" },
                    { id: "sw-protocols", title: "Protocols & Extensions", duration: "30" }
                ]
            }
        ]
    },
    "kotlin-architect": {
        title: "Kotlin Architect",
        phases: [
            {
                name: "Phase 1: Kotlin Essentials",
                nodes: [
                    { id: "kt-safety", title: "Null Safety Logic", duration: "20" },
                    { id: "kt-flow", title: "Expressions & Functions", duration: "25" },
                    { id: "kt-data", title: "Data Classes & Objects", duration: "20" }
                ]
            },
            {
                name: "Phase 2: Advanced Concurrency",
                nodes: [
                    { id: "kt-lambda", title: "Lambdas & Higher-Order Functions", duration: "35" },
                    { id: "kt-coro", title: "Coroutines (Async)", duration: "45" }
                ]
            }
        ]
    },
    "ts-architect": {
        title: "TypeScript Architect",
        phases: [
            {
                name: "Phase 1: Strict Typing",
                nodes: [
                    { id: "ts-basics", title: "Type Annotations", duration: "15" },
                    { id: "ts-interface", title: "Interfaces & Enums", duration: "20" },
                    { id: "ts-generics", title: "Generics Logic", duration: "40" }
                ]
            }
        ]
    },
    "arduino-architect": {
        title: "Arduino Architect",
        phases: [
            {
                name: "Phase 1: Hardware I/O",
                nodes: [
                    { id: "ard-setup", title: "Environment & Setup", duration: "15" },
                    { id: "ard-sensors", title: "Reading Sensors (Temp/Light)", duration: "30" },
                    { id: "ard-output", title: "Digital & Analog Output", duration: "25" }
                ]
            }
        ]
    },
    "ubuntu-architect": {
        title: "Ubuntu Architect",
        phases: [
            {
                name: "Phase 1: Shell & System",
                nodes: [
                    { id: "ub-bash", title: "Bash Terminal Mastery", duration: "20" },
                    { id: "ub-files", title: "Filesystem & Permissions", duration: "25" },
                    { id: "ub-admin", title: "APT & Package Logic", duration: "20" }
                ]
            }
        ]
    },
    "go-architect": {
        title: "Go Architect",
        phases: [
            {
                name: "Phase 1: Concurrency Core",
                nodes: [
                    { id: "go-basics", title: "Types, Maps & Slices", duration: "20" },
                    { id: "go-methods", title: "Methods & Interfaces", duration: "30" },
                    { id: "go-routines", title: "Goroutines & Channels", duration: "45" }
                ]
            }
        ]
    }
};
