export default function Books({name, author, description, img}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={img} alt={name} className="w-full h-64 object-fit rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4 rainbow-text"> {name}</h2>
            <p className="text-gray-600 mt-2">by {author}</p>
            <p className="text-gray-700 mt-4">{description}</p>
        </div>
    );
}