import Papa from 'papaparse'

interface DogProfile {
  id: string
  tipo: string
  nombre: string
  edad: string
  talla: string
  historia: string
  caracter: string
  texto_especial: string
  imagenes: string | string[]
}

// Función para hacer el fetch y procesar el CSV desde el servidor
export const fetchDogProfiles = async (): Promise<DogProfile[]> => {
  try {
    const response = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8DHojRvP7AlPtiKv5xK_8T0fmfb2PM-YqRseoQW1cEq7Z7GCkoOXJzbJlQ5cIZUeKpLzkxpFkAVFg/pub?output=csv'
    )

    const csvData = await response.text()

    return new Promise((resolve, reject) => {
      Papa.parse<DogProfile>(csvData, {
        header: true,
        complete: (results) => {
          const parsedProfiles = results.data.map((profile) => {
            if (typeof profile.imagenes === 'string' && profile.imagenes.includes(',')) {
              // Si tiene comas, dividir en array
              profile.imagenes = profile.imagenes.split(',').map(img => img.trim())
            }
            return profile
          })
          resolve(parsedProfiles)
        },
        error: (error: { message: string }) => {
          reject(new Error('Error parsing CSV: ' + error.message))
        }
      })
    })
  } catch (error) {
    throw new Error('Error fetching CSV: ' + (error as Error).message)
  }
}
