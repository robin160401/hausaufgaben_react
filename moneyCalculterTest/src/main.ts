const form = document.getElementById("form-element") as HTMLFormElement;
const rechnungsInput = document.getElementById("rechnung") as HTMLInputElement;
const personenInput = document.getElementById("personen") as HTMLInputElement;
const selectInput = document.getElementById("serviceFee") as HTMLSelectElement;
const trinkgeldText = document.getElementById("trinkgeld") as HTMLElement;
const gesamtsummeText = document.getElementById("gesamtsumme") as HTMLElement;
const pppText = document.getElementById("ppp") as HTMLElement;
import { calculate } from "./caluculate";

if (form){
    form.addEventListener('submit',(event) => { event.preventDefault(); calculate(Number(rechnungsInput.value), Number(personenInput.value), Number(selectInput.value))});
}
