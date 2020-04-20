import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { 
  }


  private positions = new Subject<any>();

  sendPositions(data: object) {
    this.positions.next(data);
  }

  clearPositions() {
    this.positions.next();
  }

  getPositions(): Observable<any> {
    return this.positions.asObservable();
  }

  getJobs(): Observable<any> {
    return this.http.get(`${this.global.apiurl}/api/job/JobList?userid=${this.global.userId}`)
      .pipe(map(result => {
        return result;
      }));
  }
  
  getWorkerJobs(): Observable<any> {
    return this.http.get(`${this.global.apiurl}/api/job/WorkerJobList?userId=${this.global.userId}`)
      .pipe(map(result => {
        return result;
      }));
  }

  getWorkerUpcomingJobs(): Observable<any> {
    return this.http.get(`${this.global.apiurl}/api/job/WorkerUpcomingJobs?userId=${this.global.userId}`)
      .pipe(map(result => {
        return result;
      }));
  }

  getJobDetails(id): Observable<any> {
    return this.http.get<any>(`${this.global.apiurl}/api/job/JobDetails?id=${id}`)
      .pipe(map(result => {
        if (result.success) {
          return result.jobs;
        }
        return [];
      }));
  }

  applyJob(userid, jobid): Observable<any> {
    return this.http.get<any>(`${this.global.apiurl}/api/job/ApplyJob?userid=${userid}&jobid=${jobid}`)
      .pipe(map(result => {
        if(result.success){
          this.global.notifySuccess("Success", "Applied successfully");
        }
        return result;
      }));
  }

  saveJob(data): Observable<any> {
    return this.http.get<any>(`${this.global.apiurl}/api/job/saveJob?id=${data.id}&jobtitle=${data.jobtitle}&position=${data.position}&description=${data.description}&startTime=${data.startTime}&endTime=${data.endTime}&city=${data.city}&salary=${data.salary}&jobtype=${data.jobtype}&userid=${this.global.userId}`)
      .pipe(map(result => {
        return result;
      }));
  }

  getPositionsFromServer() {
    return this.http.get<any>(`${this.global.apiurl}/api/job/PositionList`)
      .pipe(map(result => {
        this.sendPositions(result);
        return result;
      }));
  }

  acceptWorker(id, jobid, workerid) {
    return this.http.get<any>(`${this.global.apiurl}/api/job/AcceptWorker?id=${id}&jobid=${jobid}&workerId=${workerid}`)
      .pipe(map(result => {
        if(result.success){
          this.global.notifyError("Success", "Worker accepted successfully");
        }
        return result;
      }));
  }

  declineWorker(id) {
    return this.http.get<any>(`${this.global.apiurl}/api/job/DeclineWorker?id=${id}`)
      .pipe(map(result => {
        return result;
      }));
  }

  startJob(id) {
    return this.http.get<any>(`${this.global.apiurl}/api/job/StartJob?appliedid=${id}`)
      .pipe(map(result => {
        if(result.success){
          this.global.notifySuccess("Good Luck", "Your Job has been started");
        }
        return result;
      }));
  }

  completeJob(appliedid, jobid) {
    return this.http.get<any>(`${this.global.apiurl}/api/job/CompleteJob?appliedid=${appliedid}&jobid=${jobid}`)
      .pipe(map(result => {
        if(result.success){
          this.global.notifySuccess("Welldone", "You have completed your job");
        }
        return result;
      }));
  }
}
