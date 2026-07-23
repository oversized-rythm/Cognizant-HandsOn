# WEEK 02 : Spring Data JPA with Spring Boot, Hibernate

<hr>

## Hands-on 1 : Spring Data JPA - Quick Example

### Objective
Build a simple Spring Boot application using Spring Data JPA and Hibernate to connect with a MySQL database, map a database table to a Java entity, and perform basic data retrieval using a JPA Repository.

---

## Software Prerequisites

- MySQL Server 8.0
- MySQL Workbench 8
- IntelliJ IDEA (instead of Eclipse)
- Maven 3.6.2 or above
---

## Project Setup

- [ ] Create a new Spring Boot project using **Spring Initializr**.
- [ ] Configure the project with:
    - Group: `com.cognizant`
    - Artifact: `orm-learn`
    - Description: `Demo project for Spring Data JPA and Hibernate`
- [ ] Add the following dependencies:
    - Spring Boot DevTools
    - Spring Data JPA
    - MySQL Driver
- [ ] Open the project in **IntelliJ IDEA**.
- [ ] Verify the generated Maven project structure.

---

## Database Configuration

- [ ] Create a new MySQL schema:

```sql
CREATE SCHEMA ormlearn;
```

- [ ] Configure `application.properties` with:
    - Spring logging
    - Hibernate SQL logging
    - Database connection properties
    - Hibernate configuration

- [ ] Build and run the project.
- [ ] Verify that the application starts successfully.

---

## Verify Spring Boot Application

- [ ] Configure logging using **SLF4J Logger**.
- [ ] Verify that the `main()` method executes successfully.
- [ ] Understand the purpose of:
    - `@SpringBootApplication`
    - `pom.xml`
    - `src/main/java`
    - `src/main/resources`
    - `src/test/java`

---

## Database Setup

Create the `country` table.

```sql
CREATE TABLE country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);
```

Insert sample records.

```sql
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
```

---

## Entity Layer

Create package:

```text
com.cognizant.ormlearn.model
```

Create:

- [ ] `Country.java`

Requirements:

- [ ] Add `@Entity`
- [ ] Add `@Table`
- [ ] Add `@Id`
- [ ] Add `@Column`
- [ ] Generate getters
- [ ] Generate setters
- [ ] Override `toString()`

---

## Repository Layer

Create package:

```text
com.cognizant.ormlearn.repository
```

Create:

- [ ] `CountryRepository.java`

Requirements:

- [ ] Extend `JpaRepository<Country, String>`
- [ ] Add `@Repository`

---

## Service Layer

Create package:

```text
com.cognizant.ormlearn.service
```

Create:

- [ ] `CountryService.java`

Requirements:

- [ ] Add `@Service`
- [ ] Autowire `CountryRepository`
- [ ] Implement `getAllCountries()`
- [ ] Add `@Transactional`
- [ ] Return data using `countryRepository.findAll()`

---

## Application Testing

Modify `OrmLearnApplication.java`.

- [ ] Obtain `ApplicationContext`
- [ ] Retrieve `CountryService` bean
- [ ] Create `testGetAllCountries()`
- [ ] Invoke `countryService.getAllCountries()`
- [ ] Print retrieved country list using Logger

---

## Expected Output

- [ ] Application starts successfully.
- [ ] Database connection established.
- [ ] Hibernate validates the schema.
- [ ] Spring Boot creates the Application Context.
- [ ] All countries are retrieved from the database.
- [ ] SQL queries are visible in the console logs.

---
