import {useState} from 'react';

import { FormLabel, Input, Button, Flex, Stack} from '@chakra-ui/react';

interface ProductData{
  nome?: string;
  marca?: string;
  modelo?: string;
  descricao?: string;
  quantidade?: string;
  preco?: string;
}

export function FormProduct(){
   

    const [product, setProduct] = useState<ProductData>({nome: "", marca: "", modelo: "",  descricao: "", quantidade: "", preco: ""});
    const [products, setProducts] = useState<Array<ProductData>>([]);
    
    function handleForm(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      
      let savedClient = product;
      localStorage.setItem('Client', JSON.stringify(savedClient));
      setProducts([...products, savedClient]);
      setProduct({nome: "", marca: "", modelo: "",  descricao: "", quantidade: "", preco: ""})
  
    }
  
    return (
      <Flex>
        <Stack w="100%">
        
        <form onSubmit={handleForm}>
          
            <FormLabel>Nome do Produto</FormLabel>
            <Input mb={6} type="text" value={product.nome} onChange={e => setProduct({nome: e.target.value})}/>

            <FormLabel>Marca</FormLabel>
            <Input mb={6} type="text" value={product.marca} onChange={e => setProduct({marca: e.target.value})}/>
          
            <FormLabel>Modelo</FormLabel>
            <Input mb={6} color="brand.900" value={product.modelo} onChange={e => setProduct({modelo: e.target.value})}/>
              
            

            <Flex justifyContent="space-between">
              <Stack>
                <FormLabel>Preço</FormLabel>
                <Input mb={6} type="text" value={product.preco} onChange={e => setProduct({preco: e.target.value})}/>
              </Stack>
              <Stack>
                <FormLabel>Quantidade</FormLabel>
              <Input mb={6} type="text" value={product.quantidade} onChange={e => setProduct({quantidade: e.target.value})}/>
              </Stack>
            </Flex>

            <FormLabel>Descrição</FormLabel>
            <Input  type="text" value={product.descricao} onChange={e => setProduct({descricao: e.target.value})} />

            <Flex justify="flex-end">

              <Button mt={4} as="button" colorScheme="yellow" type="submit">cadastrar</Button>
            </Flex>
        </form>
        {/* <ul>
          {products.map( item => 
            <li key={item.nome}>{item.nome}</li>
          )}
        </ul> */}
        </Stack>
      </Flex>
    );
}