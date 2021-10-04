import React from "react";
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from "@mui-treasury/components/menu/category";

const Drawer2 = React.memo(function CategoryMenu() {
  return (
    <div>
      <CategoryProvider>
        <CategoryTitle>Skiing Category</CategoryTitle>
        <CategoryItem>Ski Products</CategoryItem>
        <CategoryItem>Performance Monitors</CategoryItem>
        <CategoryItem>Training</CategoryItem>
        <CategoryItem>Motivation</CategoryItem>
        <CategoryItem>Cross skiing</CategoryItem>
        <CategoryItem>More</CategoryItem>
      </CategoryProvider>
    </div>
  );
});

export default Drawer2;
