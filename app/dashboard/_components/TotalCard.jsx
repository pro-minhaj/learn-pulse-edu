import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TotalCard = ({ title, count }) => {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-lg font-medium tracking-wide'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>
                    {count}
                </div>
            </CardContent>
        </Card>
    );
};

export default TotalCard;