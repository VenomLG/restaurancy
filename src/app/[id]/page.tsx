import api from "@/api";
import RestaurantCard from "../components/restaurantCard";

export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const restaurant = await api.fetch(id);
  
    return {
      title: `${restaurant.name} - Restaurancy`,
      description: restaurant.description,
    };
  }

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return (
    <RestaurantCard restaurant={restaurant} />

  );
}