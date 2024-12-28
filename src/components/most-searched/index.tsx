import CustomSection from "../ui/custom-section";
import SearchedProduct from "./searchedProduct";

function MostSearched() {
  return (
    <CustomSection heading="Most Searched">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
        <SearchedProduct
          brand="Nike"
          model="Nike Air Force 1"
          name="Nike Air Force 1 '07 'Triple White'"
          imageURL="https://static.sneakerjagers.com/products/660x660/185674.jpg"
          link="/product/nike-air-force-1-07-triple-white-cw2288-111"
        />

        <SearchedProduct
          brand="Nike"
          model="Nike P-6000"
          name="Nike P-6000 Premium 'Black'"
          imageURL="https://static.sneakerjagers.com/p/9IUCB6NO7jmdmyhYEMwQQq9pqnj215ESLm6QpeAe.png"
          link="/product/nike-p-6000-premium-black-hq3818-001"
        />

        <SearchedProduct
          brand="Nike"
          model="Nike P-6000"
          name="Nike P-6000 'Metallic Silver'"
          imageURL="https://static.sneakerjagers.com/p/N01MKSwPFH9FzsxfjfmF1seL9KDSOkHn4a2jUrnU.png"
          link="/product/nike-p-6000-metallic-silver-cn0149-001"
        />

        <SearchedProduct
          brand="Nike"
          model="Nike P-6000"
          name="Nike P-6000 'Flat Pewter'"
          imageURL="https://static.sneakerjagers.com/products/660x660/435359.jpg"
          link="/product/nike-p-6000-flat-pewter-fn7509-029"
        />

        <SearchedProduct
          brand="Nike"
          model="Nike Air Max 1"
          name="Nike Air Max 1 '87 WMNS 'Leopard'"
          imageURL="https://static.sneakerjagers.com/p/nYPzM4uRmw9TbrTbIQXru5uM9usuCyQ7eLRjhpCH.png"
          link="/product/nike-air-max-1-87-wmns-leopard-fv6605-200"
        />

        <SearchedProduct
          brand="Nike"
          model="Nike Air Max 1"
          name="Nike Air Max 1 '86 PRM 'Powerwall BRS' - 2024"
          imageURL="https://static.sneakerjagers.com/p/KhnDRt7zAgi9genu8xmEoibOg9FLgJMuotwLikFC.png"
          link="/product/nike-air-max-1-86-prm-powerwall-brs-2024-hf0551-300"
        />
      </div>
    </CustomSection>
  );
}

export default MostSearched;
