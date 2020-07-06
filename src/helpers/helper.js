//==> Obtiene la diferencia entre años
export const getYearDifference = year => {
  return new Date().getFullYear() - year
}
// Obtiene la diferencia entre años <==//

//==> Calcula el total a pagar segun la marca
export const calculateBrand = brand => {
  let increment
  switch (brand) {
    case 'europe':
      increment = 1.3
      break
    case 'american':
      increment = 1.15
      break
    case 'asian':
      increment = 1.05
      break
    default:
      break
  }
  return increment
}
// Calcula el total a pagar segun la marca <==//

// ==>Calcula el total a pagar segun el plan

export const getPlan = plan => {
  return plan === 'basic' ? 1.2 : 1.5
}

// Calcula el total a pagar segun el plan<==//

// ==> Colocar en mayuscula

export const firtsMayus = text => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Colocar en mayuscula<==//
