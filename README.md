# Mon Projet JEE

Ce projet est une application JEE pour gérer les microservices étudiants et les classes.

## Fonctionnalités

- **Gestion des étudiants** : Création, lecture, mise à jour et suppression des étudiants.
- **Gestion des classes** : Création, lecture, mise à jour et suppression des classes.
- **Service Eureka** : Découverte de services pour la communication entre les microservices.

## Architecture

### Backend : Spring Boot

Le backend est composé de trois microservices développés avec Spring Boot :

1. **student-service** : Gère les étudiants.
2. **classe-service** : Gère les classes.
3. **eureka-service** : Gère la découverte et la communication entre les microservices.

#### Dépendances utilisées :
- Spring Web
- Spring Data JPA
- MySQL Driver
- Spring Cloud (Eureka, OpenFeign)

#### Base de données :
- **studentdb** : Base de données MySQL pour le microservice `student-service`.
- **classedb** : Base de données MySQL pour le microservice `classe-service`.

#### Relation :
- Un étudiant peut être inscrit dans une ou plusieurs classes.

### Frontend : React.js

Le frontend est développé avec React.js pour fournir une interface utilisateur intuitive.

#### Fonctionnalités du frontend :
- Ajout et Affichage des étudiants et des classes.
- Communication avec les microservices via Axios.

## Technologies utilisées

- **Backend** :
  - Spring Boot (avec Maven)
  - Spring Cloud (Eureka, OpenFeign)
  - MySQL (bases de données séparées pour `studentdb` et `classedb`)
- **Frontend** :
  - React.js
  - Axios (pour les appels API)
- **Autres outils** :
  - Git (gestion de version)
  - Spring Initializr (création des microservices)

## Installation

### Prérequis

- Java 17 ou supérieur
- Node.js (pour le frontend React)
- MySQL
- Maven

