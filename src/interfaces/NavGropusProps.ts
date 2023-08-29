export interface GroupItemProps {
  index?: number;
  title: string;
  link: string;
};


export interface NavGroupsProps {
  index?: number;
  title: string;
  items: GroupItemProps[];
  videoUrl: string;
};
