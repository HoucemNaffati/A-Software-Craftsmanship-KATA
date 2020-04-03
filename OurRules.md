# Planning

- Always Ask for examples. (not only you will need them for tests but also they clarify details and estimates)
- Always Challenge examples. (it is never enough details)
- Always precise obvious cases, express them with examples.
- Never forget edge cases. (don't make decisions instead of your client)
- Never forget exceptions

# Architecture:

- We use Hexagonal Architecture principles: https://alistair.cockburn.us/hexagonal-architecture/

# Coding principles:

- Public methods are ruled by contracts, never change the signature.
- Coding by wishful thinking.
- YAGNI: You Are Not Gonna Need It !
- BoyScout Principle: “Try and leave the world a little better than you found it”.[Robert Baden-Powell]
- DRY: Don't Repeat Yourself.
- KISS: Keep It Simple(Stupid).
- Tell don't ask.

### SOLID:

  1.SRP: Single Responsibility Principle

    A class, a function, a variable should have a unique functional reason to change.
    Always think about functional responsibility within an abstraction layer.
    How to be sure that I am not getting it wrong: 
    within an abstraction layer, name the element by its functional responsibilities (Aggregate and hide details within a specific abstraction layer and specific need).
    =>If the name contains OR | AND then SRP is violated.

  2.OCP: Open Closed Principle

    Each public class or function should be closed to modification and opened for extension:
    * Changing details requirements should remain in the details (private utilities methods or dependencies)
    * Adding a new case of the same rule should'nt push you to modify the signature or the implementation 
    of your exposed methods.
  
  3.LSP: Liskov substitution principle
  
    if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without 
    altering any of the desirable properties of that program
  
  4.ISP: Interface segregation principle
  
     Clients shouldn't be forced to depend on methods they do not use.
     
  5.DIP: Dependency Inversion Principle  
  
    The use case doesn't instantiate its dependencies, but it only defines them (contracts).
    High-level modules should not depend on low-level modules. Both should depend on abstractions(contracts).
    Abstractions should not depend on details. Details should depend on abstractions.



#Testing:

##### NEVER TEST TECHNICAL DETAILS

##### NEVER TEST PRIVATES

##### Tests are independent and isolated. One test should never influence a second one.

##### Stub Never Mock: 
https://blog.cleancoder.com/uncle-bob/2014/05/14/TheLittleMocker.html
https://www.openmymind.net/2011/3/23/Stop-Using-Mocks/

##Unit Test

    Validates functional specifications.
    Captures behaviors and no technical details.
    Allow Algorithm discovery.
    Those tests provides **immediate** feedback when developing existing or new features. They are extremely fast.

    It stubs dependencies.
    It is framework independent.
    Grants functional non regression as a consequence.

##Integration Test

    Validates that dependencies behave as expected.
    In general, it tests what we stubbed in unit tests.

##E2E test:

    It is a test that crosses all layers (UI, Config, Service, UseCase...) and grants the
    expected behaviour from the point of view of the user.
    No mocks, no stubs, no fakes...they are system tests
    We do little E2E testing because they are fragile and can break easily.
    UI details can change easily so you can do snapshot testing (happy and failure scenarios) to capture accidental
    global regressions.

#Smells:

- Broken SRP: After naming correctly, the name contains OR or AND.
- BAD Design: Changing method visibility only to be able to test it.
- Tests are not UNIT: Test suite passes some time, some times not.
- Test FOCUS: changing technical details break one or more tests.

#TDD
    We do Baby Steps

    red -> green -> refactor -> red...
        red: I dont write any production code unless I have a failing unit test that require it.
        green: I write minimum code that strictly satisfies the test.
        refactor: I make the code S.O.L.I.D  