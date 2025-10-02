'use client'
import React, { useState } from 'react';

import {ChevronDown, Book, Code, Database, Layers, Settings, Globe, Sparkles} from 'lucide-react';


interface Annotation {
    name: string;
    syntax: string;
    purpose: string;
    why: string;
    whenToUse: string;
    realExample: string;
}

interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    annotations: Annotation[];
}

const SpringBootAnnotations = () => {


    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [expandedAnnotation, setExpandedAnnotation] = useState<string | null>(null);

    const toggleCategory = (id : string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
        setExpandedAnnotation(null); // Reset annotation when changing a category
    };

    const toggleAnnotation = (id : string) => {
        setExpandedAnnotation(expandedAnnotation === id ? null : id);
    };

    const categories : Category[] = [

        {

            id: 'core',

            name: 'Core Spring Boot Annotations',

            icon: <Settings className="w-5 h-5"/>,

            color: 'bg-blue-500',

            annotations: [

                {

                    name: '@SpringBootApplication',

                    syntax: '@SpringBootApplication\npublic class MyApplication {\n  public static void main(String[] args) {\n    SpringApplication.run(MyApplication.class, args);\n  }\n}',

                    purpose: 'Main entry point for Spring Boot application',

                    why: 'This is a convenience annotation that combines three important annotations: @Configuration, @EnableAutoConfiguration, and @ComponentScan. It tells Spring Boot to automatically configure your application based on dependencies, scan for components, and register configuration classes.',

                    whenToUse: 'Use this on your main application class - the one with the main() method. Every Spring Boot app needs exactly ONE class with this annotation.',

                    realExample: 'In an e-commerce app, your main class EcommerceApplication would have this annotation to bootstrap the entire application.'

                },

                {

                    name: '@Configuration',

                    syntax: '@Configuration\npublic class AppConfig {\n  @Bean\n  public MyService myService() {\n    return new MyServiceImpl();\n  }\n}',

                    purpose: 'Marks a class as a source of bean definitions',

                    why: 'Tells Spring that this class contains @Bean methods that define objects Spring should manage. It replaces XML configuration files from older Spring versions.',

                    whenToUse: 'When you need to manually configure beans or set up third-party libraries that Spring cannot auto-configure.',

                    realExample: 'Creating a database connection pool configuration, setting up security rules, or configuring external API clients.'

                },

                {

                    name: '@ComponentScan',

                    syntax: '@ComponentScan(basePackages = "com.example")',

                    purpose: 'Tells Spring where to look for components',

                    why: 'Spring needs to know which packages to scan for classes annotated with @Component, @Service, @Repository, @Controller. Without this, Spring would not find your components.',

                    whenToUse: 'Usually included automatically with @SpringBootApplication. Use separately when you need custom scanning behavior.',

                    realExample: 'If your controllers are in com.example.web and services in com.example.service, ComponentScan finds them all.'

                },

                {

                    name: '@EnableAutoConfiguration',

                    syntax: '@EnableAutoConfiguration',

                    purpose: 'Enables Spring Boot\'s auto-configuration magic',

                    why: 'Automatically configures Spring application based on JAR dependencies. If you have spring-boot-starter-web, it configures Tomcat, DispatcherServlet, etc. automatically.',

                    whenToUse: 'Included in @SpringBootApplication. Rarely used alone.',

                    realExample: 'Adding spring-boot-starter-data-jpa automatically configures database connection, JPA, EntityManager without manual setup.'

                }

            ]

        },

        {

            id: 'stereotype',

            name: 'Stereotype Annotations (Component Types)',

            icon: <Layers className="w-5 h-5"/>,

            color: 'bg-green-500',

            annotations: [

                {

                    name: '@Component',

                    syntax: '@Component\npublic class EmailService {\n  public void sendEmail(String msg) {\n    // logic\n  }\n}',

                    purpose: 'Generic stereotype for any Spring-managed component',

                    why: 'Tells Spring to create and manage this object. Spring will instantiate it, manage its lifecycle, and inject it wherever needed.',

                    whenToUse: 'For general-purpose classes that do not fit into Service, Repository, or Controller categories.',

                    realExample: 'Utility classes, helper classes, validators, or custom components like FileProcessor, CacheManager.'

                },

                {

                    name: '@Service',

                    syntax: '@Service\npublic class UserService {\n  public User createUser(User user) {\n    // business logic\n    return userRepository.save(user);\n  }\n}',

                    purpose: 'Marks service layer classes containing business logic',

                    why: 'Indicates this class holds business logic. Makes code more readable and maintainable. Future Spring versions may add service-specific features.',

                    whenToUse: 'For classes that contain business logic, calculations, validations, or orchestrate operations between multiple repositories.',

                    realExample: 'OrderService (calculates total, applies discounts), PaymentService (processes payments), NotificationService (sends emails/SMS).'

                },

                {

                    name: '@Repository',

                    syntax: '@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  User findByEmail(String email);\n}',

                    purpose: 'Marks data access layer classes',

                    why: 'Indicates database operations happen here. Spring automatically translates database exceptions into Spring\'s DataAccessException, making error handling consistent.',

                    whenToUse: 'For classes or interfaces that interact with databases - performing CRUD operations.',

                    realExample: 'UserRepository (user database operations), ProductRepository (product CRUD), OrderRepository (order queries).'

                },

                {

                    name: '@Controller',

                    syntax: '@Controller\npublic class HomeController {\n  @GetMapping("/")\n  public String home() {\n    return "index"; // returns view name\n  }\n}',

                    purpose: 'Marks web controller classes (returns views)',

                    why: 'Tells Spring this class handles web requests and returns views (HTML pages). Used in traditional server-side rendered applications.',

                    whenToUse: 'When building traditional web apps with Thymeleaf, JSP where you return HTML pages.',

                    realExample: 'HomeController (renders homepage), LoginController (shows login page), DashboardController (displays dashboard view).'

                },

                {

                    name: '@RestController',

                    syntax: '@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n  @GetMapping\n  public List<User> getUsers() {\n    return userService.getAllUsers();\n  }\n}',

                    purpose: 'Marks REST API controllers (returns data)',

                    why: 'Combines @Controller and @ResponseBody. Every method automatically converts returned objects to JSON/XML. Perfect for RESTful APIs.',

                    whenToUse: 'When building REST APIs for mobile apps, SPAs (React/Angular/Vue), or microservices communication.',

                    realExample: 'UserRestController (user API endpoints), ProductRestController (product data API), OrderRestController (order management API).'

                }

            ]

        },

        {

            id: 'dependency',

            name: 'Dependency Injection Annotations',

            icon: <Code className="w-5 h-5"/>,

            color: 'bg-purple-500',

            annotations: [

                {

                    name: '@Autowired',

                    syntax: '@Service\npublic class UserService {\n  @Autowired\n  private UserRepository userRepository;\n}',

                    purpose: 'Automatically injects dependencies',

                    why: 'Instead of manually creating objects (new UserRepository()), Spring injects them automatically. This is Dependency Injection - the core principle of Spring.',

                    whenToUse: 'When a class needs another Spring-managed bean to function. Almost every service needs repositories, controllers need services, etc.',

                    realExample: 'UserService needs UserRepository injected, OrderService needs both OrderRepository and PaymentService injected.'

                },

                {

                    name: '@Qualifier',

                    syntax: '@Autowired\n@Qualifier("emailNotification")\nprivate NotificationService notification;',

                    purpose: 'Specifies which bean to inject when multiple candidates exist',

                    why: 'When you have multiple implementations of the same interface, Spring does not know which one to inject. @Qualifier tells Spring exactly which bean to use.',

                    whenToUse: 'When you have multiple implementations of an interface and need to specify which one to inject.',

                    realExample: 'You have EmailNotificationService and SmsNotificationService both implementing NotificationService. Use @Qualifier to choose which one.'

                },

                {

                    name: '@Primary',

                    syntax: '@Service\n@Primary\npublic class EmailNotificationService implements NotificationService {}',

                    purpose: 'Marks a bean as the default choice when multiple candidates exist',

                    why: 'Instead of using @Qualifier everywhere, mark one implementation as @Primary to be the default. Other places can still use @Qualifier to override.',

                    whenToUse: 'When one implementation is used most commonly as the default.',

                    realExample: 'EmailNotificationService is primary, but in some cases you explicitly want SmsNotificationService using @Qualifier.'

                },

                {

                    name: '@Value',

                    syntax: '@Value("${app.name}")\nprivate String appName;\n\n@Value("${server.port:8080}")\nprivate int port;',

                    purpose: 'Injects values from properties files',

                    why: 'Allows externalized configuration. Instead of hardcoding values, read them from application.properties or environment variables. This makes configuration flexible.',

                    whenToUse: 'For configuration values like database URLs, API keys, feature flags, timeouts that might change between environments.',

                    realExample: 'Database URL for dev/prod, API keys, email SMTP settings, max file upload size, pagination size.'

                }

            ]

        },

        {

            id: 'web',

            name: 'Web/REST API Annotations',

            icon: <Globe className="w-5 h-5"/>,

            color: 'bg-orange-500',

            annotations: [

                {

                    name: '@RequestMapping',

                    syntax: '@RequestMapping(value = "/users", method = RequestMethod.GET)',

                    purpose: 'Maps HTTP requests to handler methods',

                    why: 'Links URLs to your Java methods. When a user visits /users, Spring knows which method to execute.',

                    whenToUse: 'Base annotation for all HTTP mappings. Usually used at class level; use specific annotations (@GetMapping, etc.) at method level.',

                    realExample: '@RequestMapping("/api/orders") at class level makes all methods inside handle URLs starting with /api/orders.'

                },

                {

                    name: '@GetMapping',

                    syntax: '@GetMapping("/users/{id}")\npublic User getUser(@PathVariable Long id) {\n  return userService.findById(id);\n}',

                    purpose: 'Handles HTTP GET requests',

                    why: 'GET is for retrieving data (read operations). Shorthand for @RequestMapping(method = RequestMethod.GET).',

                    whenToUse: 'For all read/retrieve operations - getting lists, single records, search results.',

                    realExample: 'GET /users (list all users), GET /users/123 (get user with ID 123), GET /products?category=electronics (search products).'

                },

                {

                    name: '@PostMapping',

                    syntax: '@PostMapping("/users")\npublic User createUser(@RequestBody User user) {\n  return userService.save(user);\n}',

                    purpose: 'Handles HTTP POST requests',

                    why: 'POST is for creating new resources. Data is sent in request body.',

                    whenToUse: 'For create operations - registering users, creating orders, uploading files.',

                    realExample: 'POST /users (create new user), POST /orders (place new order), POST /login (authenticate user).'

                },

                {

                    name: '@PutMapping',

                    syntax: '@PutMapping("/users/{id}")\npublic User updateUser(@PathVariable Long id, @RequestBody User user) {\n  return userService.update(id, user);\n}',

                    purpose: 'Handles HTTP PUT requests',

                    why: 'PUT is for updating existing resources completely (replace all fields).',

                    whenToUse: 'For full updates where you replace the entire resource.',

                    realExample: 'PUT /users/123 (update all fields of user 123), PUT /products/456 (replace entire product data).'

                },

                {

                    name: '@PatchMapping',

                    syntax: '@PatchMapping("/users/{id}")\npublic User partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> updates) {\n  return userService.partialUpdate(id, updates);\n}',

                    purpose: 'Handles HTTP PATCH requests',

                    why: 'PATCH is for partial updates (update only specific fields, not the whole resource).',

                    whenToUse: 'When you want to update only specific fields without sending all data.',

                    realExample: 'PATCH /users/123 with {"email": "new@email.com"} - updates only email, leaves other fields unchanged.'

                },

                {

                    name: '@DeleteMapping',

                    syntax: '@DeleteMapping("/users/{id}")\npublic void deleteUser(@PathVariable Long id) {\n  userService.delete(id);\n}',

                    purpose: 'Handles HTTP DELETE requests',

                    why: 'DELETE is for removing resources.',

                    whenToUse: 'For delete operations - removing users, canceling orders, deleting posts.',

                    realExample: 'DELETE /users/123 (delete user), DELETE /orders/789 (cancel order), DELETE /posts/456 (remove post).'

                },

                {

                    name: '@PathVariable',

                    syntax: '@GetMapping("/users/{userId}/orders/{orderId}")\npublic Order getOrder(@PathVariable Long userId, @PathVariable Long orderId) {}',

                    purpose: 'Extracts values from URI path',

                    why: 'URLs often contain IDs or parameters. This annotation extracts them into method parameters.',

                    whenToUse: 'When URL contains dynamic segments that identify resources.',

                    realExample: 'In /users/123, extract 123 as userId. In /products/shoes/nike, extract "shoes" and "nike".'

                },

                {

                    name: '@RequestParam',

                    syntax: '@GetMapping("/users")\npublic List<User> getUsers(\n  @RequestParam(defaultValue = "0") int page,\n  @RequestParam(required = false) String name\n) {}',

                    purpose: 'Extracts query parameters from URL',

                    why: 'Query parameters (after ?) are used for filtering, sorting, pagination. This annotation extracts them.',

                    whenToUse: 'For optional filters, search queries, pagination, sorting parameters.',

                    realExample: 'In /users?page=2&size=20&sort=name, extract page, size, and sort parameters.'

                },

                {

                    name: '@RequestBody',

                    syntax: '@PostMapping("/users")\npublic User create(@RequestBody User user) {\n  return userService.save(user);\n}',

                    purpose: 'Converts JSON/XML request body to Java object',

                    why: 'When clients send JSON data, Spring automatically converts it to your Java object using Jackson.',

                    whenToUse: 'In POST, PUT, PATCH requests where client sends data in request body.',

                    realExample: 'Client sends {"name":"John","email":"john@example.com"}, Spring converts to User object.'

                },

                {

                    name: '@ResponseBody',

                    syntax: '@GetMapping("/users")\n@ResponseBody\npublic List<User> getUsers() {\n  return userService.getAll();\n}',

                    purpose: 'Converts Java object to JSON/XML response',

                    why: 'Tells Spring to convert returned object to JSON instead of looking for a view template.',

                    whenToUse: 'In REST APIs. Not needed if you use @RestController (which includes this automatically).',

                    realExample: 'Method returns List<User>, Spring converts to JSON array: [{"name":"John",...}, {"name":"Jane",...}]'

                },

                {

                    name: '@ResponseStatus',

                    syntax: '@PostMapping("/users")\n@ResponseStatus(HttpStatus.CREATED)\npublic User create(@RequestBody User user) {}',

                    purpose: 'Sets HTTP response status code',

                    why: 'By default, successful responses return 200 OK. This allows you to return appropriate HTTP status codes (201 Created, 204 No Content, etc.).',

                    whenToUse: 'When you need to return specific HTTP status codes to follow REST conventions.',

                    realExample: 'Return 201 Created after creating resource, 204 No Content after deletion, 202 Accepted for async processing.'

                }

            ]

        },

        {

            id: 'data',

            name: 'Data/JPA Annotations',

            icon: <Database className="w-5 h-5"/>,

            color: 'bg-red-500',

            annotations: [

                {

                    name: '@Entity',

                    syntax: '@Entity\n@Table(name = "users")\npublic class User {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n  private String name;\n}',

                    purpose: 'Marks a class as a JPA entity (database table)',

                    why: 'Tells JPA this class represents a table in database. JPA will map this class to a table and manage CRUD operations.',

                    whenToUse: 'For every class that represents a database table.',

                    realExample: 'User class maps to users table, Product class maps to products table, Order class maps to orders table.'

                },

                {

                    name: '@Table',

                    syntax: '@Entity\n@Table(name = "app_users", schema = "public")',

                    purpose: 'Specifies table details',

                    why: 'By default, JPA uses class name as table name. Use @Table to customize table name or specify schema.',

                    whenToUse: 'When database table name differs from class name, or you need to specify schema/catalog.',

                    realExample: 'Class is User but table name is app_users. Class is Product but table is PRODUCTS_TBL.'

                },

                {

                    name: '@Id',

                    syntax: '@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Long id;',

                    purpose: 'Marks the primary key field',

                    why: 'Every table needs a primary key. This tells JPA which field is the unique identifier.',

                    whenToUse: 'On the field that is the primary key of the table.',

                    realExample: 'User has id field as primary key, Product has productId, Order has orderId.'

                },

                {

                    name: '@GeneratedValue',

                    syntax: '@GeneratedValue(strategy = GenerationType.IDENTITY)',

                    purpose: 'Specifies how primary key is generated',

                    why: 'Database can auto-generate IDs. This tells JPA how to generate them: IDENTITY (database auto-increment), SEQUENCE (database sequence), AUTO (JPA decides).',

                    whenToUse: 'When database auto-generates primary keys.',

                    realExample: 'MySQL uses AUTO_INCREMENT (IDENTITY strategy), PostgreSQL uses SEQUENCE, Oracle uses SEQUENCE.'

                },

                {

                    name: '@Column',

                    syntax: '@Column(name = "email_address", unique = true, nullable = false, length = 100)',

                    purpose: 'Customizes column mapping',

                    why: 'Fine-tune how field maps to database column - specify column name, length, constraints like nullable, unique.',

                    whenToUse: 'When you need custom column name, or want to enforce database constraints.',

                    realExample: 'Field email maps to email_address column, field must be unique and not null, max length 100 characters.'

                },

                {

                    name: '@Transient',

                    syntax: '@Transient\nprivate String fullName;',

                    purpose: 'Excludes field from database mapping',

                    why: 'Some fields are calculated or temporary and should not be stored in database. @Transient tells JPA to ignore this field.',

                    whenToUse: 'For calculated fields, temporary data, or fields that should not persist.',

                    realExample: 'fullName derived from firstName + lastName, age calculated from birthDate, temporary password field.'

                },

                {

                    name: '@OneToMany',

                    syntax: '@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)\nprivate List<Order> orders;',

                    purpose: 'Defines one-to-many relationship',

                    why: 'One User has many Orders, one Category has many Products. This establishes the relationship in JPA.',

                    whenToUse: 'When one entity has multiple related entities.',

                    realExample: 'One User has many Orders, one Department has many Employees, one Post has many Comments.'

                },

                {

                    name: '@ManyToOne',

                    syntax: '@ManyToOne\n@JoinColumn(name = "user_id")\nprivate User user;',

                    purpose: 'Defines many-to-one relationship',

                    why: 'Many Orders belong to one User, many Products belong to one Category. This is the inverse of @OneToMany.',

                    whenToUse: 'On the "many" side of the relationship.',

                    realExample: 'Many Orders have one User, many Employees belong to one Department, many Comments belong to one Post.'

                },

                {

                    name: '@ManyToMany',

                    syntax: '@ManyToMany\n@JoinTable(\n  name = "student_course",\n  joinColumns = @JoinColumn(name = "student_id"),\n  inverseJoinColumns = @JoinColumn(name = "course_id")\n)\nprivate Set<Course> courses;',

                    purpose: 'Defines many-to-many relationship',

                    why: 'Many Students enroll in many Courses, many Authors write many Books. Requires a join table in database.',

                    whenToUse: 'When both sides can have multiple related entities.',

                    realExample: 'Students and Courses (student_course join table), Authors and Books, Products and Categories.'

                },

                {

                    name: '@JoinColumn',

                    syntax: '@ManyToOne\n@JoinColumn(name = "user_id", nullable = false)',

                    purpose: 'Specifies foreign key column',

                    why: 'In relationships, tells JPA which column holds the foreign key reference.',

                    whenToUse: 'In @ManyToOne or @OneToOne to specify foreign key column name.',

                    realExample: 'Order table has user_id column referencing User table\'s id column.'

                }

            ]

        },

        {

            id: 'validation',

            name: 'Validation Annotations',

            icon: <Book className="w-5 h-5"/>,

            color: 'bg-yellow-500',

            annotations: [

                {

                    name: '@Valid',

                    syntax: '@PostMapping("/users")\npublic User create(@Valid @RequestBody User user) {\n  return userService.save(user);\n}',

                    purpose: 'Triggers validation of object',

                    why: 'Tells Spring to validate the object against validation annotations (@NotNull, @Size, etc.) before executing method.',

                    whenToUse: 'In controller methods before processing data to ensure data is valid.',

                    realExample: 'Validate user input in registration form, validate product data before saving, validate order details before processing.'

                },

                {

                    name: '@NotNull',

                    syntax: '@NotNull(message = "Name cannot be null")\nprivate String name;',

                    purpose: 'Field must not be null',

                    why: 'Ensures required fields are provided. Prevents NullPointerException.',

                    whenToUse: 'For mandatory fields that must have a value.',

                    realExample: 'User name, product price, order quantity - all must be provided.'

                },

                {

                    name: '@NotEmpty',

                    syntax: '@NotEmpty(message = "Email cannot be empty")\nprivate String email;',

                    purpose: 'String/Collection must not be null or empty',

                    why: 'Stricter than @NotNull - not only checks for null but also ensures strings are not empty ("").',

                    whenToUse: 'For fields that must have actual content, not just be non-null.',

                    realExample: 'Email address, username, product name - must have actual text.'

                },

                {

                    name: '@NotBlank',

                    syntax: '@NotBlank(message = "Password cannot be blank")\nprivate String password;',

                    purpose: 'String must not be null, empty, or only whitespace',

                    why: 'Most strict - not null, not empty, and not just spaces. Ensures meaningful content.',

                    whenToUse: 'For text fields that must contain actual content.',

                    realExample: 'Password, description, address - must have real content, not just spaces.'

                },

                {

                    name: '@Size',

                    syntax: '@Size(min = 8, max = 20, message = "Password must be 8-20 characters")\nprivate String password;',

                    purpose: 'Validates string length or collection size',

                    why: 'Enforces minimum and maximum length constraints for strings or collection sizes.',

                    whenToUse: 'When fields have length requirements.',

                    realExample: 'Password (8-20 chars), username (3-15 chars), phone number (10 digits), list must have 1-5 items.'

                },

                {

                    name: '@Email',

                    syntax: '@Email(message = "Invalid email format")\nprivate String email;',

                    purpose: 'Validates email format',

                    why: 'Ensures the string is a valid email address format.',

                    whenToUse: 'For email fields.',

                    realExample: 'User email, contact email - validates format like user@example.com.'

                },

                {

                    name: '@Min / @Max',

                    syntax: '@Min(value = 0, message = "Price must be positive")\n@Max(value = 10000)\nprivate BigDecimal price;',

                    purpose: 'Validates numeric minimum/maximum values',

                    why: 'Ensures numbers fall within acceptable range.',

                    whenToUse: 'For numeric fields with value constraints.',

                    realExample: 'Product price (> 0), age (18-100), quantity (1-999), rating (1-5).'

                },

                {

                    name: '@Pattern',

                    syntax: '@Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")\nprivate String phone;',

                    purpose: 'Validates string matches regex pattern',

                    why: 'Enforces specific format using regular expressions.',

                    whenToUse: 'For fields with specific format requirements.',

                    realExample: 'Phone number (10 digits), postal code, credit card number, custom ID formats.'

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
                    <h1 className="text-5xl md:text-6xl font-bold  mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                        Spring Boot Annotations
                    </h1>
                    <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
                        Master every annotation with real-world examples and best practices
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
                      {category.annotations.length} annotations
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
                                        {category.annotations.map((annotation, idx) => (
                                            <div
                                                key={idx}
                                                className="border-b border-white/5 last:border-b-0 transition-all duration-300 hover:bg-white/5"
                                            >
                                                {/* Annotation Header */}
                                                <button
                                                    onClick={() => toggleAnnotation(`${category.id}-${idx}`)}
                                                    className="w-full px-6 py-4 flex items-center justify-between group/annotation"
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <code className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-lg font-mono text-sm font-semibold border border-cyan-500/30 whitespace-nowrap backdrop-blur-sm">
                                                            {annotation.name}
                                                        </code>
                                                        <span className="text-blue-200/70 text-sm truncate hidden md:block">
                            {annotation.purpose}
                          </span>
                                                    </div>
                                                    <div className={`transform transition-all duration-300 ${expandedAnnotation === `${category.id}-${idx}` ? 'rotate-180' : ''}`}>
                                                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                                                    </div>
                                                </button>

                                                {/* Annotation Details with smooth animation */}
                                                <div
                                                    className={`transition-all duration-500 ease-in-out ${
                                                        expandedAnnotation === `${category.id}-${idx}`
                                                            ? 'max-h-[3000px] opacity-100'
                                                            : 'max-h-0 opacity-0 overflow-hidden'
                                                    }`}
                                                >
                                                    <div className="px-6 py-6 space-y-6 bg-gradient-to-b from-black/30 to-black/20">
                                                        {/* Syntax */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                SYNTAX
                              </span>
                                                            </div>
                                                            <pre className="bg-gradient-to-br from-slate-900 to-slate-800 text-green-400 p-5 rounded-xl overflow-x-auto text-sm font-mono border border-green-500/20 shadow-xl shadow-green-500/10 transition-all duration-300 hover:border-green-500/40">
                              {annotation.syntax}
                            </pre>
                                                        </div>

                                                        {/* Why Use It */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                WHY USE IT?
                              </span>
                                                            </div>
                                                            <p className="text-blue-100/80 leading-relaxed pl-4 border-l-2 border-blue-500/30">
                                                                {annotation.why}
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
                                                                {annotation.whenToUse}
                                                            </p>
                                                        </div>

                                                        {/* Real Example */}
                                                        <div className="group/section">
                                                            <div className="flex items-center gap-2 mb-3">
                              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                                REAL EXAMPLE
                              </span>
                                                            </div>
                                                            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 backdrop-blur-sm">
                                                                <p className="text-orange-100/90 leading-relaxed">
                                                                    {annotation.realExample}
                                                                </p>
                                                            </div>
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
                            Created with ❤ for Spring Boot learners
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpringBootAnnotations;