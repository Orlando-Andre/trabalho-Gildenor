package com.example.demo.dao;

public class PaymentRequestDTO {
    private String freight;
    private String payment;

    private String height;
    private String width;
    private String length;
    private String name;
    private String description;

    private String cep;
    private String state;
    private String city;
    private String street;
    private String number;
    private String block;
    private String batch;

    private String destCep;
    private String destState;
    private String destCity;
    private String destStreet;
    private String destNumber;
    private String destBlock;
    private String destBatch;


    public String getFreight() {
        return freight;
    }

    public void setFreight(String freight) {
        this.freight = freight;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getBlock() {
        return block;
    }

    public void setBlock(String block) {
        this.block = block;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public String getDestCep() {
        return destCep;
    }

    public void setDestCep(String destCep) {
        this.destCep = destCep;
    }

    public String getDestState() {
        return destState;
    }

    public void setDestState(String destState) {
        this.destState = destState;
    }

    public String getDestCity() {
        return destCity;
    }

    public void setDestCity(String destCity) {
        this.destCity = destCity;
    }

    public String getDestStreet() {
        return destStreet;
    }

    public void setDestStreet(String destStreet) {
        this.destStreet = destStreet;
    }

    public String getDestNumber() {
        return destNumber;
    }

    public void setDestNumber(String destNumber) {
        this.destNumber = destNumber;
    }

    public String getDestBlock() {
        return destBlock;
    }

    public void setDestBlock(String destBlock) {
        this.destBlock = destBlock;
    }

    public String getDestBatch() {
        return destBatch;
    }

    public void setDestBatch(String destBatch) {
        this.destBatch = destBatch;
    }

    @Override
    public String toString() {
        return "PaymentRequestDTO{" +
                "freight='" + freight + '\'' +
                ", payment='" + payment + '\'' +
                ", height='" + height + '\'' +
                ", width='" + width + '\'' +
                ", length='" + length + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", cep='" + cep + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", number='" + number + '\'' +
                ", block='" + block + '\'' +
                ", batch='" + batch + '\'' +
                ", destCep='" + destCep + '\'' +
                ", destState='" + destState + '\'' +
                ", destCity='" + destCity + '\'' +
                ", destStreet='" + destStreet + '\'' +
                ", destNumber='" + destNumber + '\'' +
                ", destBlock='" + destBlock + '\'' +
                ", destBatch='" + destBatch + '\'' +
                '}';
    }
}
