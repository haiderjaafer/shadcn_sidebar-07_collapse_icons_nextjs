'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function TabsSection() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') ?? 'gallery';
  const title = searchParams.get('title');

  return (
    <Tabs defaultValue={currentTab}>
      <TabsList className='w-full'>
        <TabsTrigger value='gallery' className='w-full' asChild>
          <Link
            href={{
            //   pathname: '/',
              query: { ...Object.fromEntries(searchParams.entries()), tab: 'gallery' },
            }}
          >
            Gallery
          </Link>
        </TabsTrigger>
        <TabsTrigger value='messages' className='w-full' asChild>
          <Link
            href={{
            //   pathname: '/',
              query: { ...Object.fromEntries(searchParams.entries()), tab: 'messages' },
            }}
          >
            Messages
          </Link>
        </TabsTrigger>
        <TabsTrigger value='settings' className='w-full' asChild>
          <Link
            href={{
            //   pathname: '/',
              query: { ...Object.fromEntries(searchParams.entries()), tab: 'settings' },
            }}
          >
            Settings
          </Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='gallery'>
        <h2 className='text-center text-2xl font-semibold mt-10'>
          Gallery {title}
        </h2>
      </TabsContent>
      <TabsContent value='messages'>
        <h2 className='text-center text-2xl font-semibold mt-10'>
          Messages {title}
        </h2>
      </TabsContent>
      <TabsContent value='settings'>
        <h2 className='text-center text-2xl font-semibold mt-10'>
          Settings {title}
        </h2>
      </TabsContent>
    </Tabs>
  );
}
