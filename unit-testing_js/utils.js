export function getAllIds( items ) {
  return items.map( item => item?.id ?? null)
}