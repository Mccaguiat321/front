// data-table.component.ts
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface DataItem {
    id: number;
    name: string; // Change according to your table structure
    age: number; // Change according to your table structure
    // Add other fields as needed
}

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    data: DataItem[] = [];
    searchTerm: string = '';
    selectedItem: DataItem | null = null; // To hold the item being edited
    successMessage: string = ''; // To hold the success message after operations

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData() {
        axios.get(`http://localhost:3000/items?search=${this.searchTerm}`)
            .then(response => {
                this.data = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    onSearchChange() {
        this.fetchData();
    }

    // Method to update an item
    updateItem() {
        if (this.selectedItem) {
            axios.put(`http://localhost:3000/api/update/${this.selectedItem.id}`, this.selectedItem)
                .then(response => {
                    this.successMessage = 'Item updated successfully';
                    this.fetchData(); // Refresh the data list
                    this.selectedItem = null; // Clear the selected item
                })
                .catch(error => {
                    console.error('Error updating item:', error);
                });
        }
    }

    // Method to delete an item
    deleteItem(id: number) {
        axios.delete(`http://localhost:3000/api/delete/${id}`)
            .then(response => {
                this.successMessage = 'Item deleted successfully';
                this.fetchData(); // Refresh the data list
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    }

    // Method to select an item for editing
    selectItem(item: DataItem) {
        this.selectedItem = { ...item }; // Create a copy to avoid mutating the original data
    }
}
