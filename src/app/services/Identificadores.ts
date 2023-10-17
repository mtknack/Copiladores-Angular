import { Injectable } from '@angular/core';

const regrasDeIdentificador = {
  R1: /^[À-ÿa-zA-Z$_][À-ÿa-zA-Z$_0-9]*/,
  R2: /^(?!true$|false$).*/i,
  R3: /^(?!null$).*/i,
  R4: /^[À-ÿa-zA-Z$_][À-ÿa-zA-Z$_0-9]*/,
};

@Injectable({
  providedIn: 'root',
})
export class Identificadores {
  VerificarIdentificador(identificador: string): boolean {
    if (
      !regrasDeIdentificador.R1.test(identificador) ||
      !regrasDeIdentificador.R2.test(identificador) ||
      !regrasDeIdentificador.R3.test(identificador) ||
      !regrasDeIdentificador.R4.test(identificador)
    ) {
      return false;
    }

    return true;
  }
}
