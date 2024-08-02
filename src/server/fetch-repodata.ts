
export const revalidate = 3600 * 4 // revalidate the data at most every 4 hour

export const projects = [
  "psicologa-eduarda-mendes",
  "Api-Ecommerce-Nest",
  "padroes-projeto-java-spring",
  "controle-financeiro",
  "app_Inventario",
  "Laravel-Inertia-Vue",
  "ecommerce-backend",
  "Book-Nest-Prisma",
  "react-login"

];

export const fetchMeta = async (project: string) => {
  
  const link = "https://api.github.com/repos/geovanesv/" + project;

  const response = await fetch(link);

  try {
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

const fetchRepoMeta = async () => {
  const repoData = [];

  for (const project of projects) {
    const data = await fetchMeta(project);
    repoData.push(data);
  }

  return repoData;
};

export default fetchRepoMeta;
