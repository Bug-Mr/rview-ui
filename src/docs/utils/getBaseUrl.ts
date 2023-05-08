import { useRoute } from "vitepress"
export function getBaseUrl(key?: string) {
  const route = useRoute()
  const { title } = route.data
  return import.meta.env.VITE_UI_BASE_URL + `#/pages/${key ? key : title}/index`;
}
