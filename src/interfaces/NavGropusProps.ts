export interface GroupItemProps {
  index?: number;
  title: string;
  link: string;
};


export interface NavGroupsProps {
  title: string;
  items: GroupItemProps[];
  videoUrl: string;
};
