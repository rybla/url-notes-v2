---
title: "Designing Software in the Large"
author: "David Foster"
siteName: "David Foster"
pubDate: "2025-07-22T00:00:00+00:00"
lang: "en"
---

# Designing Software in the Large

[A Philosophy of Software Design](https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X/) is my favorite book I’ve read to date about designing large long-lived maintainable software programs. Here’s what I learned:

## Complexity

**Complexity** is anything related to the structure of a software system that makes it hard to understand & modify the system.

*   Symptoms of complexity:
    
    *   **Change Amplification** - A seemingly simple change requires code modifications in many different places.
    *   **High Cognitive Load** - High amount of information a developer needs to know to complete a task.
    *   **Unknown Unknowns** - When it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully.
*   Causes of complexity:
    
    *   **Dependencies** - A dependency exists when a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code.
    *   **Obscurity** - Obscurity occurs when important information is not obvious.

[![A concept map diagram showing symptoms and causes of complexity, and how they related to each other](https://dafoster.net/assets/2025/designing-software-in-the-large/section0.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section0.svg)

To keep a software system maintainable, you must strive to keep the complexity of the system low as you & others make changes to it.

### The big picture

Concepts related to complexity, which the remaining sections of this article will zoom in on:

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/section2.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section2.svg)

## Dependencies: A Cause of Complexity

A **dependency** exists when a given piece of code cannot be understood in isolation; the code relates in some way to other code. Numerous and strong dependencies between modules of a system make it difficult to change one module without changing others (Change Amplification) and make it difficult to understand modules in isolation (High Cognitive Load).

Key contributors to dependency-complexity are:

*   **Duplication** - Duplication occurs when the same knowledge is used in multiple places. This can be direct repetition of the same piece of code appearing in multiple places. Or it can be more subtle, such as multiple classes understanding the details of the same file format or network protocol.
*   **Exceptions** - An exception is a particularly complex element of an interface which can propagate not just from a method to its direct caller but also to higher level callers (and their interfaces).
*   **Inheritance** - Implementation inheritance in object-oriented systems creates dependencies between the parent class and each of its subclasses.
*   **Temporal Decomposition** - A system exhibits temporal decomposition when its structure corresponds to the time order in which operations will occur.

The opposite of dependency-complexity is **cohesive code**, created primarily by focusing on designing **deep modules**.

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/section1.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section1.svg)

**Deep modules** allow a lot of functionality to be accessed through a small interface:

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/deep-and-shallow-modules.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/deep-and-shallow-modules.svg)

Keeping module interfaces small lowers the number and strength of dependencies between modules, resulting in lower overall system complexity:

[![Complexity with and without abstractions](https://dafoster.net/assets/2017/abstraction-and-encapsulation/complexity_comparison.png)](https://dafoster.net/assets/2017/abstraction-and-encapsulation/complexity_comparison.png)

Chapters 4-9 of the book are related to techniques for forming deeper modules. My article [How to Design Large Programs with Abstraction and Encapsulation](https://dafoster.net/articles/2017/03/25/how-to-design-large-programs-with-abstraction-and-encapsulation/) also discusses deep modules in the context of encapsulation & abstraction.

## Obscurity: A Cause of Complexity

**Obscurity** occurs when important information is not obvious.

Obscurity creates Unknown Unknowns and contributes to High Cognitive Load:

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/section3.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section3.svg)

Key contributors to obscurity:

*   **Vague Names**
*   **Inconsistency**
*   **Inadequate Documentation**.

Smaller contributors to obscurity:

*   indirection via **listeners**
*   indirection via **polymorphism**
*   using **generic containers to hold structured data**

The opposite of obscurity is **obvious code**. Obvious code

*   uses **precise names**,
*   is **consistent**,
*   is **well-documented**, and
*   makes good use of **whitespace**.

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/section4.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section4.svg)

There are many techniques for creating **consistency** in code:

*   **Consistent use of names**, **consistent code style**, and **consistent implementation patterns** are hallmarks of consistency in general.
    
*   Tools such as **autoformatters**, **linters**, and **automated consistency tests** are great for enforcing consistency.
    
*   **Documentation** of conventions can be captured in **coding style guides** and through references to documented **design patterns**.
    

[![](https://dafoster.net/assets/2025/designing-software-in-the-large/section5.svg)](https://dafoster.net/assets/2025/designing-software-in-the-large/section5.svg)

## Strategic vs. Tactical Mindset

![](https://dafoster.net/assets/2025/designing-software-in-the-large/tactical-tornado.svg)

Complexity accumulates naturally in a software system if left unchecked.

And once complexity has accumulated it is hard to eliminate.

Therefore the book recommends taking a “zero-tolerance” stance toward the incremental introduction of complexity.

Specifically, it advocates taking a **strategic approach** to programming tasks, where you intentionally invest time to produce clean designs and fix problems, in addition to getting new features working.

Many programmers, by contrast, take a purely **tactical approach** that focuses _only_ on getting new features working, disregarding the long-term costs of adding incremental complexity and other forms of cutting corners.

## Takeaway

**Working code (alone) is not enough.**

To keep a software system maintainable, you must strive to keep the complexity of the system low as you & others make changes to it.