import type { Animal } from '~/types/animal'

const imageModules = import.meta.glob<string>(
  '../assets/images/shark/*_0*.png',
  { eager: true, import: 'default' }
)

const imageUrlByKey = new Map<string, string>()

for (const [path, url] of Object.entries(imageModules)) {
  const match = path.match(/([^/]+)_0(\d+)\.png$/)
  if (match) {
    imageUrlByKey.set(`${match[1]}_0${match[2]}`, url)
  }
}

export function getAnimalImageUrl(animal: Animal, frame: number): string {
  return imageUrlByKey.get(`${animal}_0${frame}`) ?? ''
}
