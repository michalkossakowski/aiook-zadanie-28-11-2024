export class Student{
    public imie:string
    public nazwisko:string
    public dataUrodzenia:Date
    public adres:string
    public indeks:number
    public grupa:string
    public stypendium:boolean
    public oceny:number[]
  
    constructor(imie:string, nazwisko:string, dataUrodzenia:Date, adres:string, indeks:number, grupa:string, stypendium:boolean, oceny:number[]){
        this.imie = imie
        this.nazwisko = nazwisko
        this.dataUrodzenia = dataUrodzenia
        this.adres = adres
        this.indeks = indeks
        this.grupa = grupa
        this.stypendium = stypendium
        this.oceny = oceny
    }
}