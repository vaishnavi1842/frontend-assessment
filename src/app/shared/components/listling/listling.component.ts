import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-listling',
  templateUrl: './listling.component.html',
  styleUrls: ['./listling.component.scss']
})
export class ListlingComponent implements OnInit {
  searchTerm: string = '';
  pageSize: number = 5;
  pageIndex: number = 0;
  categories: string[] = ['Electronics', 'Appliances', 'Accessories'];
  loadedItems: { [key: string]: boolean } = {};
  selectedCategories: { [key: string]: boolean } = {};
  filteredItems: any[] = [];
  displayedItems: any[] = [];
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sortSidenav') sortSidenav!: MatSidenav;
  
  items = [
    {
      pk: 1,
      name: 'Premium Headphones',
      points: 250,
      display_img_url: 'https://media.istockphoto.com/id/1329837143/photo/gold-glow-headphones.webp?a=1&b=1&s=612x612&w=0&k=20&c=ixkYS8K5xK6ElqcYsXTpLOHEMmW6Hq9I107b0_wy0tM=',
      quantity: 15,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Electronics'
    },
    {
      pk: 2,
      name: 'Smartwatch',
      points: 350,
      display_img_url: 'https://thumbor.sirclocdn.com/unsafe/658x658/filters:format(webp):quality(80)/https://backoffice.fossil.co.id/media/catalog/product/cache/8df8518707b690ee19bcaa9e2c3f0ede/f/t/ftw6031_1_1.jpg',
      quantity: 8,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 3,
      category: 'Electronics'
    },
    {
      pk: 3,
      name: 'Gaming Mouse',
      points: 200,
      display_img_url: 'https://media.istockphoto.com/id/1051243766/photo/gamer-workspace-concept-top-view-a-gaming-gear-mouse-keyboard-with-rgb-color-joystick-headset.webp?a=1&b=1&s=612x612&w=0&k=20&c=_lmxxhtopgX-MZ1uMKKgPfxDd6Hlqw-E_ed487n9LIU=',
      quantity: 0,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Accessories'
    },
    {
      pk: 4,
      name: 'Wireless Keyboard',
      points: 300,
      display_img_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
      quantity: 10,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Accessories'
    },
    {
      pk: 5,
      name: 'Electric Kettle',
      points: 180,
      display_img_url:'https://media.istockphoto.com/id/1300879783/photo/electric-kettle.webp?a=1&b=1&s=612x612&w=0&k=20&c=WyoAQ_ZaAqaqhj92O2FXWEHgqwnakG9dV9wqJJqbNOw=',
      quantity: 5,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 2,
      category: 'Appliances'
    },
    {
      pk: 6,
      name: 'Bluetooth Speaker',
      points: 220,
      display_img_url: 'https://images.unsplash.com/photo-1589001181560-a8df1800e501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D',
      quantity: 20,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 7,
      category: 'Electronics'
    },
    {
      pk: 7,
      name: 'Smartphone',
      points: 450,
      display_img_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
      quantity: 0,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 3,
      category: 'Electronics'
    },
    {
      pk: 8,
      name: 'Tablet',
      points: 400,
      display_img_url: 'https://images.unsplash.com/photo-1526430752879-b9eb53fbd772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHxUYWJsZXR8ZW58MHx8MHx8fDA%3D',
      quantity: 12,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Electronics'
    },
    {
      pk: 9,
      name: 'Action Camera',
      points: 320,
      display_img_url:'https://images.unsplash.com/photo-1484506399805-c273b8e91dce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 18,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 7,
      category: 'Electronics'
    },
    {
      pk: 10,
      name: 'Drone',
      points: 600,
      display_img_url: 'https://media.istockphoto.com/id/1449084209/photo/concentrated-black-female-engineer-writing-code-developing-software-for-modern-drone-control.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfej6pRAImG6KqJcf6XzWEEbTQqPaBrlQScfSLtzF40=',
      quantity: 4,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 2,
      category: 'Electronics'
    },
    {
      pk: 11,
      name: 'Digital Camera',
      points: 450,
      display_img_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
      quantity: 6,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 3,
      category: 'Electronics'
    },
    {
      pk: 12,
      name: 'Tripod Stand',
      points: 80,
      display_img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqvxoy3pZ6X5CNzdT5Krjbj52Qd1RsbgWMg&s',
      quantity: 25,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
      category: 'Accessories'
    },
    {
      pk: 13,
      name: 'Fitness Band',
      points: 150,
      display_img_url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rml0bmVzcyUyMEJhbmR8ZW58MHx8MHx8fDA%3D',
      quantity: 14,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Electronics'
    },
    {
      pk: 14,
      name: 'Gaming Console',
      points: 700,
      display_img_url:'https://media.istockphoto.com/id/1393796813/photo/friends-playing-computer-game.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4_QtPTEb5kZL0wMLyFH-MXijSUY7DNQ20igcmbNKD0=',
      quantity: 3,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 2,
      category: 'Electronics'
    },
    {
      pk: 15,
      name: 'Electric Scooter',
      points: 1000,
      display_img_url:'https://images.unsplash.com/photo-1614226170075-d338afcd9c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVsZWN0cmljJTIwU2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D',
      quantity: 1,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 1,
      category: 'Electronics'
    },
    {
      pk: 16,
      name: 'Laptop Stand',
      points: 100,
      display_img_url:'https://images.unsplash.com/photo-1623251609314-97cc1f84e3ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcCUyMFN0YW5kfGVufDB8fDB8fHww',
      quantity: 11,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
      category: 'Accessories'
    },
    {
      pk: 17,
      name: 'Wireless Earbuds',
      points: 120,
      display_img_url:'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww',
      quantity: 17,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 6,
      category: 'Accessories'
    },
    {
      pk: 18,
      name: 'Portable Power Bank',
      points: 140,
      display_img_url: 'https://media.istockphoto.com/id/1372354660/photo/use-the-power-bank-to-charge-the-mobile-phone-in-front-of-the-fuzzy-cafe-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=l74vH8MEAwaZe6lIa2eVbpwi1EMO_KkZBoA43cj1FYc=',
      quantity: 9,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 4,
      category: 'Accessories'
    },
    {
      pk: 19,
      name: 'Smart Glasses',
      points: 220,
      display_img_url:'https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=i8vHSeffMXOknM1iu8QDnSEDuNg0nOoLjJvP-KjdRoE=',
      quantity: 5,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 3,
      category: 'Electronics'
    },
    {
      pk: 20,
      name: 'Mechanical Keyboard',
      points: 310,
      display_img_url:'https://media.istockphoto.com/id/1051243766/photo/gamer-workspace-concept-top-view-a-gaming-gear-mouse-keyboard-with-rgb-color-joystick-headset.webp?a=1&b=1&s=612x612&w=0&k=20&c=_lmxxhtopgX-MZ1uMKKgPfxDd6Hlqw-E_ed487n9LIU=',
      quantity: 8,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 4,
      category: 'Accessories'
    }
  ];
  
  constructor() {
    this.categories.forEach(category => {
      this.selectedCategories[category] = false;
    });
  }

  ngOnInit(): void {
    this.filterItems();
  }

  updateDisplayedItems(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.filteredItems.slice(startIndex, endIndex);
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = Object.keys(this.selectedCategories)
        .filter(category => this.selectedCategories[category])
        .includes(item.category);

      return matchesSearch && (Object.values(this.selectedCategories).includes(true) ? matchesCategory : true);
    });
    this.pageIndex = 0;
    this.updateDisplayedItems();
  }

  onSearch(): void {
    this.filterItems();
  }

  onCategoryChange(): void {
    this.filterItems();
  }

  sortItems(by: string, order: 'asc' | 'desc'): void {
    if (by === 'name') {
      this.filteredItems.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return order === 'asc' ? comparison : -comparison;
      });
    }
    this.updateDisplayedItems();
    this.sortSidenav.close();
  }

  openSortSidenav(): void {
    this.sortSidenav.open();
  }

  openSidebar(): void {
    this.sidenav.open();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updateDisplayedItems();
  }

}