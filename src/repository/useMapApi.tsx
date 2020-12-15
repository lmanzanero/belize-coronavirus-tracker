import react, { useState, useEffect } from 'react';

const affectedVillagesData = [
  {
    name: 'corozal',
    formatted_name: 'Corozal',
    data : 
      {
        0: 'corozal village 1',
        1: 'corozal village 2',
        2: 'corozal village 3'
      }
  },
  {
    name: 'orangewalk',
    formatted_name: 'Orange Walk',
    data :
      {
        0: 'orange walk village 1',
        1: 'orange walk village 2',
        2: 'orange walk village 3'
      }
  },
  {
    name: 'belize',
    formatted_name: 'Belize',
    data : 
      {
        0: 'belize village 1',
        1: 'belize village 2',
        2: 'belize village 3'
      }
  },
  {
    name: 'cayo',
    formatted_name: 'Cayo',
    data :
      {
        0: 'cayo village 1',
        1: 'cayo village 2',
        2: 'cayo village 3'
      }
  },
  {
    name: 'stanncreek',
    formatted_name: 'Stann Creek',
    data :
      {
        0: 'stann creek village 1',
        1: 'stann creek village 2',
        2: 'stann creek village 3'
      }
  },
  {
    name: 'toledo',
    formatted_name: 'Toledo',
    data : 
      {
        0: 'toledo village 1',
        1: 'toledo village 2',
        2: 'toledo village 3'
      }
  }
];


export const useMapApi = () => {
  const [ data, setData ] = useState(affectedVillagesData);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ status, setStatus ] = useState('idle');
  const [ error, setError ] = useState('');
  const [ currentItem, setCurrentItem ] = useState(null);
  const [ action, setAction ] = useState<any>(null);
  useEffect(() => {
    if (!affectedVillagesData) return;  
    setData(affectedVillagesData)
    const getVillages = (e:any) => {  
      console.log("getting villages...")
      // const districtData = affectedVillagesData.filter(district => district.name === e.target.getAttribute('data-value'));
      console.log(e)
    } 
    setAction(getVillages)
  }, [affectedVillagesData]);
  return { data, isLoading, status, error, currentItem, action }
}