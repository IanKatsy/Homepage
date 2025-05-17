
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import SearchBar from "@/components/SearchBar";
import Shortcuts from "@/components/Shortcuts";
import {Separator} from "@/components/ui/separator";

export function Homepage() {

    const greeting = 'Hello';
    const username = 'Ian';

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
            <div className="glass w-full max-w-7xl mx-auto p-8 md:p-12 flex flex-col">
                <div className="flex flex-row container mx-auto px-2 justify-center items-center mb-8 space-y-4">
                    <Clock />
                    <Separator orientation="vertical" className={'px-4'}/>
                    <Weather />
                </div>

                <SearchBar />

                <div className="mt-6">
                    <Shortcuts />
                </div>
            </div>
        </div>
    )
}
