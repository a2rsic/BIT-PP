"use strict";

(function (){
    function Country (name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person (name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    function Player (person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    function Address (country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }

    function BettingPlace (address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    function BettingHouse (competition, numberOfPlayers) {
        this.competition = competition;
        this.numberOfPlayers = numberOfPlayers;
        this.bettingPlaces = [];
    }
})();