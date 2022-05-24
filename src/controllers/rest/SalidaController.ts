import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";
import { SalidaService } from "src/services/SalidaService";
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet, ServiceAccountCredentials } from 'google-spreadsheet';

@Controller("/salida")
export class SalidaController {
  constructor(private salidaService:SalidaService){ }
  @Get("/")
  get() {
    let filas = this.salidaService.listaFilas()
    
    
  }
}
