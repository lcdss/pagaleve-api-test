export async function fakeStoreFetcher(path: string) {
  const response = await fetch(`https://fakestoreapi.com${path}`);

  return response.json();
}
