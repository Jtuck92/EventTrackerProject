## Animation Tracker

## API Endpoints

| Returns | Verb | URI | Description |
|---------|------|-----|-------------|
| `List<AnimatedFeature>` | GET | api/features | Retrieve list of features |
| Feature | GET | api/features/{featureId} | Retrieve features by id |
| Feature | POST | api/features | Create a new feature |
| Feature | PUT | api/features/{featureId} | Update an existing feature |
| Void | DELETE | features/{featureId} | Delete an existing feature |

## Overview

This project utilizes a MYSQL datbase to store and manage Animated Features. The database is manipulated by Spring Data JPA and Spring REST. Spring Data JPA allows for the use of repository and service interfaces that handle all transactions. Spring Rest permits brevity within the controller logic.

## Technologies Used

* Spring Tool Suite, (Spring Boot)
* Spring REST
* Spring Data JPA
* Java
* Junit Testing
* GitHub/Git
* Atom
* MAMP
* Gradle
* MySQL
* MySQL Workbench

## Lessons Learned

This project was much simpler than anticipated, after struggling through a largely similar project mere weeks before. Mappings were simple and plain to understand, without the need for a Data Access Object. The REST technology made the wiring of transactions painless and provided more time for the developer to consider additional features to add to the existing structure. Overall, the introduction of this new tool provided a much-appreciated leap forward in comprehension of exatly was being done with the data as it moved through each method and entity within the program.
