"use client";
import { Tab } from "@headlessui/react";

export function Tabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p>
            Tab 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reiciendis, harum.
          </p>
        </Tab.Panel>
        <Tab.Panel>
          <p>
            Tab 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reiciendis, harum.
          </p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
