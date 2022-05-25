import {Controller} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import { SalidaModel } from "src/models/SalidaModel";
import { SalidaService } from "src/services/SalidaService";

@Controller("/salida")
export class SalidaController {
  constructor(private salidaService:SalidaService){ }
  @Get("/")
  get() {
    //let filas = this.salidaService.listaFilas()
    
  }
  @Post("/addrow")
  async agregarRegistro(@BodyParams() salida: any){
    
    this.salidaService.agregarRegistro(salida)
    
  }
}
