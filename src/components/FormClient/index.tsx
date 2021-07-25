import {useState} from 'react';
import { FormControl, FormLabel, Input, Select, Button, Flex, Text, Stack, Heading} from '@chakra-ui/react';

interface ClientData {
    nome?: string;
    endereco?: string;
    estado?: string;
    telefone?: string;
    cpf?: string;
    email?: string;
  }


export function FormClient(){
    const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

    const [client, setClient] = useState<ClientData>({nome: "", endereco: "", estado: "",  email: "", telefone: "", cpf: ""});
    const [clients, setClients] = useState<Array<ClientData>>([]);
    
    function handleForm(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      
      let savedClient = client;
      localStorage.setItem('Client', JSON.stringify(savedClient));
      setClients([...clients, savedClient]);
      setClient({nome: "", endereco: "", estado: "",  email: "", telefone: "", cpf: ""})
  
    }
  
    return (
      <Flex>
        <Stack w="100%">
        
        <form onSubmit={handleForm}>
          
            <FormLabel>Nome completo</FormLabel>
            <Input mb={6} type="text" value={client.nome} onChange={e => setClient({nome: e.target.value})}/>

            <FormLabel>Endereço</FormLabel>
            <Input mb={6} type="text" value={client.endereco} onChange={e => setClient({endereco: e.target.value})}/>
          
            <FormLabel>Estado</FormLabel>
            <Select mb={6} color="brand.900"placeholder="Selecione um Estado" _placeholder={{color:'gray.900'}} value={client.estado} onChange={e => setClient({estado: e.target.value})}>{ estados.map(estado => <option>{estado}</option>)}
              
            </Select>

            <Flex justifyContent="space-between">
              <Stack>
                <FormLabel>Telefone</FormLabel>
                <Input mb={6} type="text" value={client.telefone} onChange={e => setClient({telefone: e.target.value})}/>
              </Stack>
              <Stack>
                <FormLabel>CPF</FormLabel>
              <Input mb={6} type="text" value={client.cpf} onChange={e => setClient({cpf: e.target.value})}/>
              </Stack>
            </Flex>

            <FormLabel>email</FormLabel>
            <Input  type="email" value={client.email} onChange={e => setClient({email: e.target.value})} />

            <Flex justify="flex-end">

              <Button mt={4} as="button" colorScheme="yellow" type="submit">cadastrar</Button>
            </Flex>
        </form>
        {/* <ul>
          {clients.map( item => 
            <li key={item.nome}>{item.nome}</li>
          )}
        </ul> */}
        </Stack>
      </Flex>
    );
}