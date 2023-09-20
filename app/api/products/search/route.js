// import { NextResponse } from 'next/server';

// const URL = 'https://dummyjson.com/products/search?q=phone';
// export default function searchProduct() {
//     async function fetchData() {
//       const res = await fetch(URL);
    
//       const data = await res.json();
//       return data;
//     }
// }

// export async function GET(req) {
//     const data = await fetchData();
//     const { searchParams } = new URL(req.url);
//     console.log(searchParams.get('query'))
//     const query = searchParams.get('query');

//     const filteredData = data.products.filter((product) => {
//         return product.title.toLowerCase().includes(query.toLowerCase());
//     })

//     return NextResponse.json(filteredData);
// }