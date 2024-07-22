import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RandomColor from './components/RandomColor'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: page layout component */}
      <h1 className='text-4xl font-extrabold lg:text-5xl'>Color Game</h1>
      <RandomColor />
    </QueryClientProvider>
  )
}

export default App
