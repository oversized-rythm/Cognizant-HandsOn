# WEEK 02 : Spring Data JPA with Spring Boot, Hibernate

<hr>

## Hands-on 2 : Difference between JPA, Hibernate and Spring Data JPA

### Objective

Understand the relationship between **JPA**, **Hibernate**, and **Spring Data JPA**, and learn how Spring Data JPA simplifies database operations by reducing boilerplate code.

---

## Java Persistence API (JPA)

### Overview

- JPA (Java Persistence API) is the Java specification (JSR 338) for Object Relational Mapping (ORM).
- It defines a standard way to map Java objects to relational database tables.
- JPA itself is only a specification and does **not** provide any implementation.
- A JPA implementation provider is required to interact with the database.

### Key Points

- [ ] Understand the purpose of JPA.
- [ ] Learn that JPA is only a specification.
- [ ] Understand entity mapping using annotations such as:
    - `@Entity`
    - `@Table`
    - `@Id`
    - `@Column`

---

## Hibernate

### Overview

- Hibernate is an ORM framework.
- Hibernate is one of the most popular implementations of the JPA specification.
- It converts Java objects into database records and vice versa.
- It provides features such as:
    - Object Relational Mapping (ORM)
    - Automatic SQL generation
    - Transaction management
    - Caching
    - Lazy loading

### Key Points

- [ ] Understand Hibernate as a JPA implementation.
- [ ] Learn how Hibernate communicates with the database.
- [ ] Understand Session and Transaction management.

---

## Spring Data JPA

### Overview

- Spring Data JPA is **not** another JPA implementation.
- It is a Spring module built on top of JPA.
- It works with JPA providers such as Hibernate.
- It eliminates repetitive CRUD code by providing ready-to-use repository interfaces.

### Key Points

- [ ] Understand Spring Data JPA architecture.
- [ ] Learn Repository-based development.
- [ ] Understand automatic implementation of CRUD methods.
- [ ] Understand transaction management using `@Transactional`.

---

## Hibernate Approach

Traditional Hibernate requires manual management of:

- Session
- Transaction
- Exception handling
- Resource cleanup

Example responsibilities include:

- Opening Session
- Beginning Transaction
- Saving Entity
- Committing Transaction
- Rolling back on failure
- Closing Session

---

## Spring Data JPA Approach

Spring Data JPA simplifies the same operation by using:

- `JpaRepository`
- `@Repository`
- `@Service`
- `@Autowired`
- `@Transactional`

The framework automatically handles:

- Session creation
- Transaction management
- Exception translation
- Resource management

---

## Hibernate vs Spring Data JPA

| Feature | Hibernate | Spring Data JPA |
|----------|-----------|-----------------|
| ORM Implementation | ✅ Yes | ❌ No |
| JPA Specification | Implements JPA | Uses JPA |
| Boilerplate Code | High | Very Low |
| CRUD Operations | Manual | Automatic |
| Transaction Management | Manual | Automatic (`@Transactional`) |
| Repository Support | No | Yes (`JpaRepository`) |
| Development Speed | Moderate | Fast |

---

## Relationship

```text
Java Application
        │
        ▼
Spring Data JPA
        │
        ▼
JPA Specification
        │
        ▼
Hibernate
        │
        ▼
MySQL Database
```

---

## Summary

- JPA defines **what** should be implemented.
- Hibernate implements the JPA specification.
- Spring Data JPA sits on top of Hibernate and minimizes boilerplate code by providing repository-based development and automatic transaction management.

---
