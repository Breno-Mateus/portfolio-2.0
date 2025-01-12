import { ComponentProps } from "react";

interface repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    banner: string;
    topics: string[];
};

export interface cardProjectsProps extends ComponentProps<"div"> {
    data: repository;
}