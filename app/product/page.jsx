
// this is server side rendering
async function getData() {
    let res = await fetch('https://dummyjson.com/products');
    let json = await res.json();
    // console.log(json);
    return json.products;
}

const page = async () => {

    const data = await getData();

    return (
			<div>
				<h1 className='heading'>Product page</h1>
				{data.map(item => (
					<div key={item.id}>
						<p>{item.title}</p>
					</div>
				))}
			</div>
		)
};

export default page;