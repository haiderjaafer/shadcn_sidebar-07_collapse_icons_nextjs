import { SearchBar } from '@/components/searchParamsExample/searchbar';
import TabsWrapper from '@/components/searchParamsExample/TabsWrapper';

export default function Home() {
  return (
    <div className='container max-w-screen-lg mt-5'>
      <h1 className='font-bold text-center text-3xl'>Search Params</h1>
      <SearchBar /> {/* This remains as a server-rendered component */}
      <TabsWrapper /> {/* This dynamically loads the TabsSection */}
    </div>
  );
}

