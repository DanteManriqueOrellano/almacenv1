import {Injectable} from "@tsed/di";
import { JsonEntityComponent } from "@tsed/schema";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { SalidaModel } from "src/models/SalidaModel";
import { GooglesheetService } from "./GooglesheetService";

@Injectable()
export class SalidaService {
    
    constructor(private sheet:GooglesheetService){  }
    async agregarRegistro(data:any){
        this.sheet.sheetName="SALIDA"
         
         return await this.sheet.create({values:data})
        
    }
    
}
