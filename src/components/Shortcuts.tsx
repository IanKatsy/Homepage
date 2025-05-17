import React from 'react';
import {
    Github,
    MessageSquare, // Replacement for Discord
    CodeXml, Youtube, BookOpenText,    // Replacement for Spotify
    HelpingHand, CloudDrizzle,
    Linkedin, CalendarDays, MapPinned,
    SearchCheck, DatabaseZap, BotMessageSquare, Mail
} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

type Shortcut = {
    name: string;
    icon: React.ReactNode;
    url: string;
    color: string;
};

const shortcuts: Record<string, Shortcut[]> = {
    Favorites: [
        {
            name: "YouTube",
            icon: <Youtube size={20}/>,
            url: "https://youtube.com",
            color: "text-red-600",
        },
        {
            name: "Reddit",
            icon: <BotMessageSquare size={20}/>,
            url: "https://reddit.com",
            color: "text-orange-500",
        },
        {
            name: "T3Chat", // You might want to adjust the URL
            icon: <BotMessageSquare size={20}/>,
            url: "https://beta.t3.chat", // Placeholder URL
            color: "text-purple-500",
        },
        {
            name: "Discord",
            icon: <MessageSquare size={20}/>,
            url: "https://discord.com",
            color: "text-indigo-400",
        },
    ],
    Destiny2: [
        {
            name: "Destiny Item Manager",
            icon: <DatabaseZap size={20}/>,
            url: "https://app.destinyitemmanager.com/",
            color: "text-sky-400",
        },
        {
            name: "Light.gg",
            icon: <SearchCheck size={20}/>,
            url: "https://light.gg",
            color: "text-yellow-500",
        },
        {
            name: "Braytech",
            icon: <MapPinned size={20}/>,
            url: "https://bray.tech",
            color: "text-teal-400",
        },

    ],
    Business: [
        {
            name: "Gmail",
            icon: <Mail size={20}/>,
            url: "https://gmail.com",
            color: "text-red-400",
        },
        {
            name: "Google Calendar",
            icon: <CalendarDays size={20}/>,
            url: "https://calendar.google.com",
            color: "text-blue-600",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={20}/>,
            url: "https://linkedin.com",
            color: "text-sky-700",
        },
        {
            name: "Google Drive",
            icon: <CloudDrizzle size={20}/>,
            url: "https://drive.google.com",
            color: "text-green-600",
        },
    ],
    Dev: [
        {
            name: "GitHub",
            icon: <Github size={20}/>,
            url: "https://github.com",
            color: "text-gray-300", // Light icon color, assuming dark cards or for contrast
        },
        {
            name: "Stack Overflow",
            icon: <HelpingHand size={20}/>,
            url: "https://stackoverflow.com",
            color: "text-orange-400",
        },
        {
            name: "V0.dev", // From your original list
            icon: <CodeXml size={20}/>, // Using CodeXml as Code was used in the original
            url: "https://v0.dev",
            color: "text-blue-400",
        },
        {
            name: "MDN Web Docs",
            icon: <BookOpenText size={20}/>,
            url: "https://developer.mozilla.org/",
            color: "text-neutral-700", // Dark gray, good for text/icon
        },
    ],
};

const ShortcutItem = ({shortcut}: { shortcut: Shortcut }) => {
    return (

        <div className={"flex flex-row"}>
            <a href={shortcut.url} className={'flex'}>
                <Button
                    variant={"ghost"}
                    className={shortcut.color}
                >

                    {shortcut.icon}
                    <Label>
                        {shortcut.name}
                    </Label>

                </Button>
            </a>
        </div>
    );
};

const Shortcuts = () => {
    return (
        <div className={'bg-blur-md bg-black/70 border-white/20 border rounded-md px-4 py-3'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {Object.entries(shortcuts).map(([category, items]) => (
                    <div className={'flex flex-col items-center justify-center'} key={category}>
                        <Label className="flex font-medium mb-3">{category}</Label>
                        <div className="grid grid-cols-2">
                            {items.map((shortcut) => (
                                <ShortcutItem key={shortcut.name} shortcut={shortcut}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shortcuts;
