'use client'
import React, { useState } from 'react';
import { Code, BookOpen, Layers, FileCode, ChevronDown, Sparkles } from 'lucide-react';

const JavaOops = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedConcept, setExpandedConcept] = useState(null);

    const toggleCategory = (id : String) => {
        setExpandedCategory(expandedCategory === id ? null : id);
        setExpandedConcept(null);
    };

    const toggleConcept = (id : String) => {
        setExpandedConcept(expandedConcept === id ? null : id);
    };

    const categories = [
        {
            id: 'static-methods',
            name: 'Static Methods',
            icon: <Code className="w-6 h-6" />,
            color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
            concepts: [
                {
                    name: 'Multiple Static Methods',
                    rule: '✅ A class can have multiple static methods',
                    why: 'Static methods belong to the class itself, not to any instance. This makes them perfect for utility functions that don\'t need object state.',
                    whenToUse: 'Use static methods for operations that don\'t depend on instance variables, like mathematical calculations, utility functions, or factory methods.',
                    syntax: `public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double divide(int a, int b) {
        return (double) a / b;
    }
}`,
                    example: `// Usage - no object needed
int sum = MathUtils.add(5, 3);           // 8
int product = MathUtils.multiply(4, 2);   // 8
double result = MathUtils.divide(16, 2);  // 8.0`,
                    keyPoints: [
                        'No need to create an object to call them',
                        'Cannot access instance variables directly',
                        'Called using ClassName.methodName()',
                        'Can call other static methods directly',
                        'Cannot use "this" keyword'
                    ]
                }
            ]
        },
        {
            id: 'abstract-classes',
            name: 'Abstract Classes',
            icon: <FileCode className="w-6 h-6" />,
            color: 'bg-gradient-to-br from-yellow-500 to-amber-600',
            concepts: [
                {
                    name: 'Abstract Class Basics',
                    rule: '❌ Cannot instantiate abstract classes',
                    why: 'Abstract classes are designed to be superclasses. They provide a common interface and partial implementation for subclasses, promoting code reuse and polymorphism.',
                    whenToUse: 'Use abstract classes when you want to share code among closely related classes, need instance variables, or want to declare non-public members.',
                    syntax: `abstract class Animal {
    // Abstract method - no implementation
    abstract void makeSound();
    
    // Concrete method - has implementation
    void eat() {
        System.out.println("Eating...");
    }
    
    // Static method
    public static void sleep() {
        System.out.println("Sleeping...");
    }
    
    // Final method - cannot be overridden
    public final void breathe() {
        System.out.println("Breathing...");
    }
}`,
                    example: `class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

// Usage
Dog d = new Dog();        // ✅ Works
d.makeSound();            // Woof!
d.eat();                  // Eating...
Animal.sleep();           // Sleeping...

Animal a = new Animal();  // ❌ Error: Cannot instantiate`,
                    keyPoints: [
                        'Can have both abstract and concrete methods',
                        'Can have constructors, instance variables, and static methods',
                        'Cannot be instantiated directly',
                        'If a class has even one abstract method, it MUST be abstract',
                        'An abstract class doesn\'t need to have abstract methods',
                        'Subclasses must implement all abstract methods (unless also abstract)'
                    ]
                },
                {
                    name: 'Method Visibility in Abstract Classes',
                    rule: '⚠️ Abstract methods can have any access modifier',
                    why: 'Unlike interfaces (which have public abstract methods by default), abstract classes give you full control over method visibility, allowing for better encapsulation.',
                    whenToUse: 'Use protected abstract methods when you want only subclasses to implement them, or package-private for package-level inheritance.',
                    syntax: `abstract class Shape {
    // Public abstract method
    public abstract double calculateArea();
    
    // Protected abstract method
    protected abstract void validate();
    
    // Package-private abstract method
    abstract String getType();
    
    // Public concrete method
    public void display() {
        System.out.println("Area: " + calculateArea());
    }
}`,
                    example: `class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    protected void validate() {
        if (radius <= 0) throw new IllegalArgumentException();
    }
    
    @Override
    String getType() {
        return "Circle";
    }
}`,
                    keyPoints: [
                        'Abstract methods can be public, protected, or package-private',
                        'Cannot be private (subclasses couldn\'t override them)',
                        'When overriding, cannot reduce visibility',
                        'More flexible than interface methods (which must be public)',
                        'Good for internal implementation contracts'
                    ]
                },
                {
                    name: 'Abstract Class Without Abstract Methods',
                    rule: '✅ Abstract class doesn\'t need abstract methods',
                    why: 'You can mark a class abstract just to prevent instantiation, even if all methods are implemented. This is useful for base classes that should only be extended.',
                    whenToUse: 'Use this pattern when you want to provide utility methods but don\'t want the class to be instantiated directly.',
                    syntax: `abstract class Utility {
    // All methods are concrete
    public void printHello() {
        System.out.println("Hello");
    }
    
    public void printWorld() {
        System.out.println("World");
    }
    
    public static void greet() {
        System.out.println("Greetings!");
    }
}`,
                    example: `class Helper extends Utility {
    // No need to override anything
}

// Usage
Helper h = new Helper();  // ✅ Works
h.printHello();           // Hello
h.printWorld();           // World

Utility u = new Utility(); // ❌ Error: Cannot instantiate`,
                    keyPoints: [
                        'Useful to prevent direct instantiation',
                        'All concrete methods are inherited by subclasses',
                        'Still cannot create objects of the abstract class',
                        'Can contain only static methods if needed',
                        'Good for template classes'
                    ]
                }
            ]
        },
        {
            id: 'interfaces',
            name: 'Interfaces',
            icon: <Layers className="w-6 h-6" />,
            color: 'bg-gradient-to-br from-purple-500 to-violet-600',
            concepts: [
                {
                    name: 'Interface Method Defaults',
                    rule: '🔑 Methods are implicitly public abstract',
                    why: 'Interfaces define contracts that classes must fulfill. Since they\'re meant to be implemented by other classes, all abstract methods are automatically public to ensure accessibility.',
                    whenToUse: 'Use interfaces when you want to define capabilities that unrelated classes can implement, or when you need multiple inheritance.',
                    syntax: `interface Animal {
    // Implicitly: public abstract void makeSound();
    void makeSound();
    
    // Implicitly: public abstract void eat();
    void eat();
}`,
                    example: `class Dog implements Animal {
    // Must be public when implementing
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
    
    @Override
    public void eat() {
        System.out.println("Dog eating...");
    }
}

// Usage
Animal animal = new Dog();
animal.makeSound();  // Woof!
animal.eat();        // Dog eating...`,
                    keyPoints: [
                        'All abstract methods are implicitly public',
                        'You don\'t need to write "public abstract"',
                        'Implementing classes MUST use public modifier',
                        'Cannot use protected or private for abstract methods',
                        'This ensures the contract is accessible everywhere'
                    ]
                },
                {
                    name: 'Default Methods (Java 8+)',
                    rule: '✅ Interfaces can have default methods',
                    why: 'Default methods allow you to add new methods to interfaces without breaking existing implementations. This was crucial for adding new functionality to Java collections.',
                    whenToUse: 'Use default methods when you need to add new behavior to an interface while maintaining backward compatibility with existing implementations.',
                    syntax: `interface Animal {
    // Abstract method
    void makeSound();
    
    // Default method with implementation
    default void eat() {
        System.out.println("Eating...");
    }
    
    default void sleep() {
        System.out.println("Sleeping...");
        log(); // Can call private methods
    }
    
    // Private helper method (Java 9+)
    private void log() {
        System.out.println("Action logged");
    }
}`,
                    example: `class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
    
    // Optional: override default method
    @Override
    public void eat() {
        System.out.println("Cat eating fish...");
    }
    // sleep() is inherited automatically
}

// Usage
Cat cat = new Cat();
cat.makeSound();  // Meow!
cat.eat();        // Cat eating fish...
cat.sleep();      // Sleeping... Action logged`,
                    keyPoints: [
                        'Can have multiple default methods',
                        'Classes inherit them automatically',
                        'Can be overridden if needed',
                        'Allows interface evolution without breaking code',
                        'Can call other default, static, or private methods'
                    ]
                },
                {
                    name: 'Static Methods in Interfaces (Java 8+)',
                    rule: '✅ Interfaces can have static methods',
                    why: 'Static methods in interfaces provide utility functions related to the interface without requiring an instance. They belong to the interface itself.',
                    whenToUse: 'Use static methods for utility or factory methods that are related to the interface but don\'t need an instance.',
                    syntax: `interface MathOperations {
    double calculate(double a, double b);
    
    // Static utility method
    static boolean isValid(double value) {
        return !Double.isNaN(value) && !Double.isInfinite(value);
    }
    
    // Static factory method
    static MathOperations addition() {
        return (a, b) -> a + b;
    }
}`,
                    example: `class Calculator implements MathOperations {
    @Override
    public double calculate(double a, double b) {
        return a * b;
    }
}

// Usage
double value = 10.5;
if (MathOperations.isValid(value)) {  // Called on interface
    Calculator calc = new Calculator();
    System.out.println(calc.calculate(5, 3));  // 15.0
}

MathOperations add = MathOperations.addition();  // Factory
System.out.println(add.calculate(5, 3));  // 8.0`,
                    keyPoints: [
                        'Called using interface name (not instance)',
                        'Cannot be overridden by implementing classes',
                        'Not inherited by implementing classes',
                        'Great for utility and factory methods',
                        'Can access only static interface members'
                    ]
                },
                {
                    name: 'Abstract Methods Optional in Interfaces',
                    rule: '⚠️ Interfaces don\'t need abstract methods',
                    why: 'Since Java 8, interfaces can contain only default and static methods without any abstract methods. This makes them similar to utility classes.',
                    whenToUse: 'Use this when you want to provide utility functions in an interface without forcing implementations.',
                    syntax: `interface Logger {
    // No abstract methods!
    
    default void logInfo(String message) {
        log("INFO", message);
    }
    
    default void logError(String message) {
        log("ERROR", message);
    }
    
    static void logStatic(String message) {
        System.out.println("[STATIC] " + message);
    }
    
    private void log(String level, String message) {
        System.out.println("[" + level + "] " + message);
    }
}`,
                    example: `class MyApp implements Logger {
    // No need to implement anything!
}

// Usage
MyApp app = new MyApp();
app.logInfo("Application started");   // [INFO] Application started
app.logError("Something went wrong"); // [ERROR] Something went wrong
Logger.logStatic("Static log");       // [STATIC] Static log`,
                    keyPoints: [
                        'Interfaces can have zero abstract methods',
                        'Can contain only default and static methods',
                        'Implementing classes inherit all default methods',
                        'Useful for providing utility functionality',
                        'Similar to abstract class but with multiple inheritance'
                    ]
                }
            ]
        },
        {
            id: 'comparison',
            name: 'Complete Comparison',
            icon: <BookOpen className="w-6 h-6" />,
            color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
            concepts: [
                {
                    name: 'Abstract Class vs Interface',
                    rule: '📊 Key Differences',
                    why: 'Understanding the differences helps you choose the right abstraction mechanism for your design. Each has its strengths and ideal use cases.',
                    whenToUse: 'Use abstract classes for "is-a" relationships with shared code. Use interfaces for "can-do" capabilities and multiple inheritance.',
                    syntax: `// Abstract Class Example
abstract class Vehicle {
    private String brand;  // Instance variable
    
    public Vehicle(String brand) {  // Constructor
        this.brand = brand;
    }
    
    abstract void start();  // Can be any visibility
    
    void stop() {  // Concrete method
        System.out.println("Stopping...");
    }
}

// Interface Example
interface Drivable {
    void drive();  // public abstract by default
    
    default void park() {  // Default method
        System.out.println("Parking...");
    }
}`,
                    example: `// Can only extend ONE abstract class
class Car extends Vehicle implements Drivable {
    public Car(String brand) {
        super(brand);
    }
    
    @Override
    void start() {
        System.out.println("Car starting...");
    }
    
    @Override
    public void drive() {
        System.out.println("Car driving...");
    }
}

// Can implement MULTIPLE interfaces
interface Flyable {
    void fly();
}

class FlyingCar extends Vehicle implements Drivable, Flyable {
    // Can do both!
}`,
                    keyPoints: [
                        '❌ Abstract class: Cannot instantiate | ❌ Interface: Cannot instantiate',
                        '✅ Abstract class: Can have constructors | ❌ Interface: No constructors',
                        '✅ Abstract class: Can have instance variables | ❌ Interface: Only constants',
                        '⚠️ Abstract class: Any visibility | ✅ Interface: public (abstract)',
                        '❌ Abstract class: Single inheritance | ✅ Interface: Multiple inheritance',
                        '✅ Both: Can have static methods',
                        '⚠️ Abstract class: Abstract methods optional | ⚠️ Interface: Abstract methods optional'
                    ]
                },
                {
                    name: 'Method Types Summary',
                    rule: '🎯 Method Capabilities',
                    why: 'Different method types serve different purposes. Abstract methods define contracts, concrete methods provide implementation, and default methods enable evolution.',
                    whenToUse: 'Choose method types based on whether you need contract definition, shared implementation, or backward compatibility.',
                    syntax: `abstract class AbstractExample {
    abstract void abstractMethod();      // Must override
    void concreteMethod() {}             // Optional override
    static void staticMethod() {}        // Class method
    final void finalMethod() {}          // Cannot override
    private void privateMethod() {}      // Not inherited
}

interface InterfaceExample {
    void abstractMethod();               // Must override (public)
    default void defaultMethod() {}      // Optional override
    static void staticMethod() {}        // Interface method
    private void privateHelper() {}      // Helper only (Java 9+)
}`,
                    example: `class Implementation extends AbstractExample 
                        implements InterfaceExample {
    @Override
    void abstractMethod() {
        // Must implement both abstract methods
    }
    
    @Override
    public void concreteMethod() {
        // Optional override from abstract class
    }
    
    @Override
    public void defaultMethod() {
        // Optional override from interface
    }
}

// Static methods called on class/interface
AbstractExample.staticMethod();
InterfaceExample.staticMethod();`,
                    keyPoints: [
                        'Abstract: Must override in subclass/implementation',
                        'Concrete: Optional override, has implementation',
                        'Default: Optional override, only in interfaces',
                        'Static: Called on class/interface, not inherited',
                        'Final: Cannot be overridden at all',
                        'Private: Not visible to subclasses (Java 9+ for interfaces)'
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4 md:p-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header with glass effect */}
                <div className="text-center mb-12 pt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="text-cyan-400 text-sm font-medium">Complete Reference Guide</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                        Java OOP Concepts
                    </h1>
                    <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
                        Master classes, abstract classes, and interfaces with real-world examples
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-4">
                    {categories.map((category) => (
                        <div key={category.id} className="group relative">
                            {/* Glassmorphism card */}
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20">

                                {/* Category Header */}
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${category.color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                            {category.icon}
                                        </div>
                                        <div className="text-left">
                                            <h2 className="text-xl md:text-2xl font-bold text-white">{category.name}</h2>
                                            <span className="text-blue-300/60 text-sm">
                        {category.concepts.length} concepts
                      </span>
                                        </div>
                                    </div>
                                    <div className={`transform transition-all duration-300 ${expandedCategory === category.id ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-6 h-6 text-cyan-400" />
                                    </div>
                                </button>

                                {/* Category Content with animation */}
                                <div
                                    className={`transition-all duration-500 ease-in-out ${
                                        expandedCategory === category.id
                                            ? 'max-h-[10000px] opacity-100'
                                            : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                                >
                                    <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
                                        {category.concepts.map((concept, idx) => (
                                            <div
                                                key={idx}
                                                className="border-b border-white/5 last:border-b-0 transition-all duration-300 hover:bg-white/5"
                                            >
                                                {/* Concept Header */}
                                                <button
                                                    onClick={() => toggleConcept(`${category.id}-${idx}`)}
                                                    className="w-full px-6 py-4 flex items-center justify-between group/concept"
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <code className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-lg font-mono text-sm font-semibold border border-cyan-500/30 whitespace-nowrap backdrop-blur-sm">
                                                            {concept.name}
                                                        </code>
                                                        <span className="text-blue-200/70 text-sm truncate hidden md:block">
                              {concept.rule}
                            </span>
                                                    </div>
                                                    <div className={`transform transition-all duration-300 ${expandedConcept === `${category.id}-${idx}` ? 'rotate-180' : ''}`}>
                                                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                                                    </div>
                                                </button>

                                                {/* Concept Details with smooth animation */}
                                                <div
                                                    className={`transition-all duration-500 ease-in-out ${
                                                        expandedConcept === `${category.id}-${idx}`
                                                            ? 'max-h-[5000px] opacity-100'
                                                            : 'max-h-0 opacity-0 overflow-hidden'
                                                    }`}
                                                >
                                                    <div className="px-6 py-6 space-y-6 bg-gradient-to-b from-black/30 to-black/20">
                                                        {/* Why Use It */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                  WHY USE IT?
                                </span>
                                                            </div>
                                                            <p className="text-blue-100/80 leading-relaxed pl-4 border-l-2 border-blue-500/30">
                                                                {concept.why}
                                                            </p>
                                                        </div>

                                                        {/* When to Use */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                  WHEN TO USE?
                                </span>
                                                            </div>
                                                            <p className="text-purple-100/80 leading-relaxed pl-4 border-l-2 border-purple-500/30">
                                                                {concept.whenToUse}
                                                            </p>
                                                        </div>

                                                        {/* Syntax */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                  SYNTAX
                                </span>
                                                            </div>
                                                            <pre className="bg-gradient-to-br from-slate-900 to-slate-800 text-green-400 p-5 rounded-xl overflow-x-auto text-sm font-mono border border-green-500/20 shadow-xl shadow-green-500/10 transition-all duration-300 hover:border-green-500/40">
{concept.syntax}
                              </pre>
                                                        </div>

                                                        {/* Real Example */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                  REAL EXAMPLE
                                </span>
                                                            </div>
                                                            <pre className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-5 backdrop-blur-sm text-orange-100/90 text-sm font-mono overflow-x-auto">
{concept.example}
                              </pre>
                                                        </div>

                                                        {/* Key Points */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                  KEY POINTS
                                </span>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {concept.keyPoints.map((point, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-cyan-100/80">
                                                                        <span className="text-cyan-400 mt-1">•</span>
                                                                        <span className="leading-relaxed">{point}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                        <p className="text-blue-200/60 text-sm">
                            Created with ❤ for Java learners
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
        </div>
    );
};

export default JavaOops;