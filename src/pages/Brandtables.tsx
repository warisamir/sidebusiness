import { Card, CardContent } from "@/components/ui/card";

export default function BrandsTable() {
    const brands = [
        { name: "UltraTech", products: "Cement, Tile Adhesives, Waterproofing" },
        { name: "APL Apollo", products: "TMT Rebars" },
        { name: "Kamdhenu", products: "TMT Rebars, MS Structures, AC Sheets" },
        { name: "MSP", products: "TMT Rebars" },
        { name: "Shrishti", products: "TMT Rebars" },
        { name: "TATA", products: "MS Structures, AC Sheets" },
        { name: "Apollo", products: "MS Structures" },
        { name: "Everest", products: "AC Sheets" },
        { name: "Supreme", products: "Water Tanks" },
        { name: "Grohe", products: "Faucets & Sanitaryware" },
        { name: "American Standard", products: "Faucets & Sanitaryware" },
        { name: "Jaquar", products: "Faucets & Sanitaryware" },
        { name: "Colstone", products: "Faucets & Sanitaryware" },
        { name: "Hindware", products: "Faucets & Sanitaryware" },
        { name: "Aries", products: "Faucets & Sanitaryware" },
        { name: "Sintex", products: "Water Tanks" },
        { name: "Vectus", products: "Water Tanks" },
        { name: "Birla Opus", products: "Paint" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6"> {/* Added max width & padding */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Brands We Deal In
                    </h2>
                    <p className="text-lg text-gray-600">
                        Each brand name links to its dedicated brand detail page.
                    </p>
                </div>

                <Card className="shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 font-semibold">Brand Name</th>
                                        <th className="px-6 py-3 font-semibold">Products Offered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {brands.map((brand, idx) => (
                                        <tr
                                            key={idx}
                                            className="border-t border-gray-200 hover:bg-gray-50 transition"
                                        >
                                            <td className="px-6 py-3 text-orange-600 font-medium">
                                                <a
                                                    href={`/brands/${brand.name
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className="hover:underline"
                                                >
                                                    {brand.name}
                                                </a>
                                            </td>
                                            <td className="px-6 py-3 text-gray-700">{brand.products}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

    );
}
