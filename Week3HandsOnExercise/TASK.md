# WEEK 03 : Spring REST using Spring Boot 3

---

## Overview

This week focuses on building RESTful web services using **Spring Boot 3**. The exercises introduce Spring Web, XML-based bean configuration, REST controllers, JSON responses, path variables, and JWT-based authentication.

---

# Hands-on 1 : Create a Spring Web Project using Maven

## Objective

Create a Spring Boot Web project using Spring Initializr and understand the project structure.

## Software Requirements

- Java 17 or above
- Maven
- Spring Boot 3
- IntelliJ IDEA / Eclipse
- Postman
- Google Chrome

## Project Configuration

| Property | Value |
|----------|-------|
| Group | `com.cognizant` |
| Artifact | `spring-learn` |
| Dependencies | Spring Web, Spring Boot DevTools |

## Tasks

- [ ] Create project using Spring Initializr.
- [ ] Import project into IDE.
- [ ] Build project using Maven.
- [ ] Execute `SpringLearnApplication`.
- [ ] Verify application starts successfully.


---

# Hands-on 2 : Spring Core – Load Country from Spring Configuration XML

## Objective

Configure a Country bean using Spring XML configuration and load it into the application.

## Country Details

| Code | Country |
|------|----------|
| US | United States |
| DE | Germany |
| IN | India |
| JP | Japan |

## Tasks

- [ ] Create `country.xml`
- [ ] Configure Country bean
- [ ] Create `Country` class
- [ ] Add constructor logging
- [ ] Add getter/setter logging
- [ ] Generate `toString()`
- [ ] Read bean using `ApplicationContext`
- [ ] Display Country details



---

# Hands-on 3 : Hello World RESTful Web Service

## Objective

Create the first REST API using Spring Boot.

## Endpoint

| Method | Endpoint |
|---------|----------|
| GET | `/hello` |

## Expected Response

```text
Hello World!!
```

## Tasks

- [ ] Create `HelloController`
- [ ] Create `/hello` endpoint
- [ ] Return `"Hello World!!"`
- [ ] Add start log
- [ ] Add end log
- [ ] Test using Browser
- [ ] Test using Postman


---

# Hands-on 4 : REST Country Web Service

## Objective

Expose the configured Country bean as a REST endpoint.

## Endpoint

| Method | Endpoint |
|---------|----------|
| GET | `/country` |

## Expected Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Tasks

- [ ] Create `CountryController`
- [ ] Implement `getCountryIndia()`
- [ ] Load Country bean from XML
- [ ] Return Country object
- [ ] Verify JSON response



---

# Hands-on 5 : REST - Get Country Based on Country Code

## Objective

Return a country using its ISO code.

## Endpoint

| Method | Endpoint |
|---------|----------|
| GET | `/countries/{code}` |

## Example Request

```text
GET /countries/in
```

## Example Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Tasks

- [ ] Create `CountryService`
- [ ] Read countries from XML
- [ ] Implement case-insensitive search
- [ ] Use `@PathVariable`
- [ ] Return matching country
- [ ] Test API

---

# Hands-on 6 : JWT Authentication Service

## Objective

Generate a JWT token after validating user credentials.

## Endpoint

| Method | Endpoint |
|---------|----------|
| GET | `/authenticate` |

## Sample Request

```bash
curl -u user:pwd http://localhost:8090/authenticate
```

## Sample Response

```json
{
    "token": "<generated-jwt-token>"
}
```

## Tasks

- [ ] Create Authentication Controller
- [ ] Configure Spring Security
- [ ] Read Authorization Header
- [ ] Decode Credentials
- [ ] Generate JWT
- [ ] Return Token



---
