import {Injectable} from "@tsed/di";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { GooglesheetService } from "./GooglesheetService";

@Injectable()
export class SalidaService {
    private hoja="SALIDA"
    constructor(private sheet:GooglesheetService){  }
    listaFilas(){
         this.sheet.sheetName = "SALIDA"
         let f = {a:"as"}
         this.sheet.create({dataObj:f})
        
    }
    
}
