import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'y0cw1zcs',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skWAlkSfRzvkOBnp1VZ09WPWxojVuDhKR5kmsEgq7GtOWIHeJeYVhl81mzrvKMrSlIlf6z4okhOagqI0gqHT6wEfCrQ7f96g6BohN2RMXlYfaF2WlcSioJCfXMZIbf2Lv6MFKL7QmZKcd3oXgc05VFLPq5hQIMJ7oIADXtAzZ5FqcZaEepf6',
  useCdn: false,
})
